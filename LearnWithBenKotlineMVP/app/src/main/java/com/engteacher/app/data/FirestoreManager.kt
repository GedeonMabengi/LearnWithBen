package com.engteacher.app.data

import com.engteacher.app.model.Room
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

class FirestoreManager {

    private val db: FirebaseFirestore = FirebaseFirestore.getInstance()

    companion object {
        const val ROOMS_COLLECTION = "rooms"
        const val USERS_COLLECTION = "users"
    }

    // ==================== SALLES ====================

    suspend fun createRoom(
        name: String,
        description: String,
        createdBy: String
    ): Result<Room> {
        return try {
            val room = Room(
                name = name,
                description = description,
                createdBy = createdBy
            )
            db.collection(ROOMS_COLLECTION)
                .document(room.id)
                .set(room.toMap())
                .await()
            Result.success(room)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getRoom(roomId: String): Room? {
        return try {
            val doc = db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .get()
                .await()
            if (doc.exists()) Room.fromDocument(doc) else null
        } catch (e: Exception) {
            null
        }
    }

    suspend fun getRoomByAccessCode(accessCode: String): Room? {
        return try {
            val query = db.collection(ROOMS_COLLECTION)
                .whereEqualTo("accessCode", accessCode.uppercase())
                .whereEqualTo("isActive", true)
                .limit(1)
                .get()
                .await()
            if (!query.isEmpty) Room.fromDocument(query.documents[0]) else null
        } catch (e: Exception) {
            null
        }
    }

    fun getRoomsByAdmin(adminId: String): Flow<List<Room>> = callbackFlow {
        val listener = db.collection(ROOMS_COLLECTION)
            .whereEqualTo("createdBy", adminId)
            .whereEqualTo("isActive", true)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    trySend(emptyList())
                    return@addSnapshotListener
                }
                val rooms = snapshot?.documents
                    ?.map { Room.fromDocument(it) }
                    ?.sortedByDescending { it.createdAt }
                    ?: emptyList()
                trySend(rooms)
            }
        awaitClose { listener.remove() }
    }

    fun getOpenRooms(): Flow<List<Room>> = callbackFlow {
        val listener = db.collection(ROOMS_COLLECTION)
            .whereEqualTo("isOpen", true)
            .whereEqualTo("isActive", true)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    trySend(emptyList())
                    return@addSnapshotListener
                }
                val rooms = snapshot?.documents
                    ?.map { Room.fromDocument(it) }
                    ?.sortedByDescending { it.createdAt }
                    ?: emptyList()
                trySend(rooms)
            }
        awaitClose { listener.remove() }
    }

    fun getRoomByIdFlow(roomId: String): Flow<Room?> = callbackFlow {
        val listener = db.collection(ROOMS_COLLECTION)
            .document(roomId)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }
                val room = snapshot?.let { if (it.exists()) Room.fromDocument(it) else null }
                trySend(room)
            }
        awaitClose { listener.remove() }
    }

    suspend fun updateRoomStatus(roomId: String, isOpen: Boolean): Result<Unit> {
        return try {
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("isOpen", isOpen)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun closeRoom(roomId: String): Result<Unit> {
        return try {
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("isOpen", false)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun openRoom(roomId: String): Result<Unit> {
        return try {
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("isOpen", true)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun deleteRoom(roomId: String): Result<Unit> {
        return try {
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("isActive", false)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // ==================== PARTICIPANTS ====================

    suspend fun requestJoinRoom(roomId: String, userId: String): Result<Unit> {
        return try {
            val room = getRoom(roomId) ?: return Result.failure(Exception("Salle introuvable"))
            
            // Vérifier si déjà inscrit ou en attente
            if (room.participants.contains(userId)) {
                return Result.failure(Exception("Vous êtes déjà inscrit à cette salle"))
            }
            if (room.pendingParticipants.contains(userId)) {
                return Result.failure(Exception("Votre demande est déjà en attente"))
            }
            
            val updatedPending = room.pendingParticipants + userId
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("pendingParticipants", updatedPending)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun approveParticipant(roomId: String, userId: String): Result<Unit> {
        return try {
            val room = getRoom(roomId) ?: return Result.failure(Exception("Salle introuvable"))
            
            val updatedPending = room.pendingParticipants - userId
            val updatedParticipants = room.participants + userId
            
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update(
                    mapOf(
                        "pendingParticipants" to updatedPending,
                        "participants" to updatedParticipants
                    )
                )
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun rejectParticipant(roomId: String, userId: String): Result<Unit> {
        return try {
            val room = getRoom(roomId) ?: return Result.failure(Exception("Salle introuvable"))
            
            val updatedPending = room.pendingParticipants - userId
            
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("pendingParticipants", updatedPending)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun removeParticipant(roomId: String, userId: String): Result<Unit> {
        return try {
            val room = getRoom(roomId) ?: return Result.failure(Exception("Salle introuvable"))
            
            val updatedParticipants = room.participants - userId
            
            db.collection(ROOMS_COLLECTION)
                .document(roomId)
                .update("participants", updatedParticipants)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // ==================== UTILISATEURS DANS UNE SALLE ====================

    suspend fun getParticipantsDetails(room: Room): List<com.engteacher.app.model.User> {
        val users = mutableListOf<com.engteacher.app.model.User>()
        for (userId in room.participants) {
            val userDoc = db.collection(USERS_COLLECTION)
                .document(userId)
                .get()
                .await()
            if (userDoc.exists()) {
                users.add(com.engteacher.app.model.User.fromDocument(userDoc))
            }
        }
        return users
    }

    suspend fun getPendingParticipantsDetails(room: Room): List<com.engteacher.app.model.User> {
        val users = mutableListOf<com.engteacher.app.model.User>()
        for (userId in room.pendingParticipants) {
            val userDoc = db.collection(USERS_COLLECTION)
                .document(userId)
                .get()
                .await()
            if (userDoc.exists()) {
                users.add(com.engteacher.app.model.User.fromDocument(userDoc))
            }
        }
        return users
    }
}
