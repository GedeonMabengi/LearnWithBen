package com.engteacher.app.data

import com.engteacher.app.model.User
import com.engteacher.app.model.UserRole
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine

sealed class AuthResult<out T> {
    data class Success<T>(val data: T) : AuthResult<T>()
    data class Error(val message: String) : AuthResult<Nothing>()
    object Loading : AuthResult<Nothing>()
}

class FirebaseAuthManager {

    private val auth: FirebaseAuth = FirebaseAuth.getInstance()
    private val db: FirebaseFirestore = FirebaseFirestore.getInstance()

    companion object {
        const val USERS_COLLECTION = "users"
        const val ROOMS_COLLECTION = "rooms"
    }

    // Écoute l'état de connexion en temps réel
    fun getCurrentUserFlow(): Flow<User?> = callbackFlow {
        val listener = FirebaseAuth.AuthStateListener { firebaseAuth ->
            val firebaseUser = firebaseAuth.currentUser
            if (firebaseUser != null) {
                // Récupérer les données utilisateur depuis Firestore
                db.collection(USERS_COLLECTION)
                    .document(firebaseUser.uid)
                    .addSnapshotListener { snapshot, _ ->
                        if (snapshot != null && snapshot.exists()) {
                            trySend(User.fromDocument(snapshot))
                        } else {
                            trySend(null)
                        }
                    }
            } else {
                trySend(null)
            }
        }
        auth.addAuthStateListener(listener)
        awaitClose { auth.removeAuthStateListener(listener) }
    }

    suspend fun getCurrentUser(): User? {
        val firebaseUser = auth.currentUser ?: return null
        return try {
            val doc = db.collection(USERS_COLLECTION)
                .document(firebaseUser.uid)
                .get()
                .await()
            if (doc.exists()) User.fromDocument(doc) else null
        } catch (e: Exception) {
            null
        }
    }

    suspend fun signIn(email: String, password: String): AuthResult<User> {
        return try {
            val result = auth.signInWithEmailAndPassword(email, password).await()
            val firebaseUser = result.user ?: return AuthResult.Error("Échec de la connexion")
            
            val userDoc = db.collection(USERS_COLLECTION)
                .document(firebaseUser.uid)
                .get()
                .await()
            
            if (!userDoc.exists()) {
                auth.signOut()
                return AuthResult.Error("Utilisateur non trouvé dans la base de données")
            }
            
            val user = User.fromDocument(userDoc)
            AuthResult.Success(user)
        } catch (e: Exception) {
            AuthResult.Error(e.localizedMessage ?: "Erreur de connexion")
        }
    }

    suspend fun signUp(
        email: String, 
        password: String, 
        displayName: String,
        isAdmin: Boolean = false
    ): AuthResult<User> {
        return try {
            val result = auth.createUserWithEmailAndPassword(email, password).await()
            val firebaseUser = result.user ?: return AuthResult.Error("Échec de la création du compte")
            
            // Déterminer le rôle : le premier utilisateur peut être admin, les autres sont students
            val role = if (isAdmin) UserRole.ADMIN else UserRole.STUDENT
            
            // Les étudiants doivent être approuvés par l'admin
            val isApproved = isAdmin
            
            val user = User(
                uid = firebaseUser.uid,
                email = email,
                displayName = displayName,
                role = role,
                isApproved = isApproved
            )
            
            db.collection(USERS_COLLECTION)
                .document(firebaseUser.uid)
                .set(user.toMap())
                .await()
            
            AuthResult.Success(user)
        } catch (e: Exception) {
            AuthResult.Error(e.localizedMessage ?: "Erreur lors de l'inscription")
        }
    }

    suspend fun checkAndCreateAdmin(email: String, password: String, displayName: String): AuthResult<User> {
        return try {
            // Vérifier si un admin existe déjà
            val adminQuery = db.collection(USERS_COLLECTION)
                .whereEqualTo("role", UserRole.ADMIN.name)
                .limit(1)
                .get()
                .await()
            
            if (!adminQuery.isEmpty) {
                return AuthResult.Error("Un administrateur existe déjà. Inscrivez-vous comme étudiant.")
            }
            
            // Créer le compte admin
            signUp(email, password, displayName, isAdmin = true)
        } catch (e: Exception) {
            AuthResult.Error(e.localizedMessage ?: "Erreur")
        }
    }

    fun signOut() {
        auth.signOut()
    }

    suspend fun resetPassword(email: String): AuthResult<Unit> {
        return try {
            auth.sendPasswordResetEmail(email).await()
            AuthResult.Success(Unit)
        } catch (e: Exception) {
            AuthResult.Error(e.localizedMessage ?: "Erreur lors de l'envoi de l'email")
        }
    }

    suspend fun updateUserApproval(userId: String, approved: Boolean): AuthResult<Unit> {
        return try {
            db.collection(USERS_COLLECTION)
                .document(userId)
                .update("isApproved", approved)
                .await()
            AuthResult.Success(Unit)
        } catch (e: Exception) {
            AuthResult.Error(e.localizedMessage ?: "Erreur lors de la mise à jour")
        }
    }

    suspend fun getUserById(userId: String): User? {
        return try {
            val doc = db.collection(USERS_COLLECTION)
                .document(userId)
                .get()
                .await()
            if (doc.exists()) User.fromDocument(doc) else null
        } catch (e: Exception) {
            null
        }
    }

    suspend fun getPendingStudents(): List<User> {
        return try {
            val query = db.collection(USERS_COLLECTION)
                .whereEqualTo("role", UserRole.STUDENT.name)
                .whereEqualTo("isApproved", false)
                .get()
                .await()
            query.documents.map { User.fromDocument(it) }
        } catch (e: Exception) {
            emptyList()
        }
    }

    suspend fun getApprovedStudents(): List<User> {
        return try {
            val query = db.collection(USERS_COLLECTION)
                .whereEqualTo("role", UserRole.STUDENT.name)
                .whereEqualTo("isApproved", true)
                .get()
                .await()
            query.documents.map { User.fromDocument(it) }
        } catch (e: Exception) {
            emptyList()
        }
    }
}
