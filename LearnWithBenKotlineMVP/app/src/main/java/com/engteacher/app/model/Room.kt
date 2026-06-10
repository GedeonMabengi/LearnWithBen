package com.engteacher.app.model

import com.google.firebase.firestore.DocumentSnapshot
import java.util.UUID

data class Room(
    val id: String = UUID.randomUUID().toString(),
    val name: String = "",
    val description: String = "",
    val createdBy: String = "",         // UID du professeur
    val accessCode: String = generateAccessCode(),
    val isOpen: Boolean = true,          // La salle est-elle ouverte ?
    val isActive: Boolean = true,        // La salle est-elle active (non supprimée) ?
    val participants: List<String> = emptyList(),  // UIDs des étudiants approuvés
    val pendingParticipants: List<String> = emptyList(),  // UIDs des étudiants en attente
    val createdAt: Long = System.currentTimeMillis(),
    val jitsiRoomName: String = "learnwithben-${UUID.randomUUID().toString().take(8)}"
) {
    companion object {
        fun fromDocument(doc: DocumentSnapshot): Room {
            return Room(
                id = doc.id,
                name = doc.getString("name") ?: "",
                description = doc.getString("description") ?: "",
                createdBy = doc.getString("createdBy") ?: "",
                accessCode = doc.getString("accessCode") ?: "",
                isOpen = doc.getBoolean("isOpen") ?: true,
                isActive = doc.getBoolean("isActive") ?: true,
                participants = FirestoreStringList.normalize(doc.get("participants")),
                pendingParticipants = FirestoreStringList.normalize(doc.get("pendingParticipants")),
                createdAt = doc.getLong("createdAt") ?: System.currentTimeMillis(),
                jitsiRoomName = doc.getString("jitsiRoomName") ?: ""
            )
        }

        private fun generateAccessCode(): String {
            val chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
            return (1..6).map { chars.random() }.joinToString("")
        }
    }

    fun toMap(): Map<String, Any> {
        return mapOf(
            "id" to id,
            "name" to name,
            "description" to description,
            "createdBy" to createdBy,
            "accessCode" to accessCode,
            "isOpen" to isOpen,
            "isActive" to isActive,
            "participants" to participants,
            "pendingParticipants" to pendingParticipants,
            "createdAt" to createdAt,
            "jitsiRoomName" to jitsiRoomName
        )
    }
}
