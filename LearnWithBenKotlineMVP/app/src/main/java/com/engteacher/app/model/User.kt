package com.engteacher.app.model

import com.google.firebase.firestore.DocumentSnapshot

data class User(
    val uid: String = "",
    val email: String = "",
    val displayName: String = "",
    val role: UserRole = UserRole.STUDENT,
    val isApproved: Boolean = false,
    val enrolledRooms: List<String> = emptyList(),
    val createdAt: Long = System.currentTimeMillis()
) {
    companion object {
        fun fromDocument(doc: DocumentSnapshot): User {
            return User(
                uid = doc.id,
                email = doc.getString("email") ?: "",
                displayName = doc.getString("displayName") ?: "",
                role = UserRole.fromString(doc.getString("role") ?: "STUDENT"),
                isApproved = doc.getBoolean("isApproved") ?: false,
                enrolledRooms = FirestoreStringList.normalize(doc.get("enrolledRooms")),
                createdAt = doc.getLong("createdAt") ?: System.currentTimeMillis()
            )
        }
    }

    fun toMap(): Map<String, Any> {
        return mapOf(
            "uid" to uid,
            "email" to email,
            "displayName" to displayName,
            "role" to role.name,
            "isApproved" to isApproved,
            "enrolledRooms" to enrolledRooms,
            "createdAt" to createdAt
        )
    }
}

enum class UserRole {
    ADMIN,      // Le professeur
    STUDENT;    // Les étudiants

    companion object {
        fun fromString(value: String): UserRole {
            return try {
                valueOf(value.uppercase())
            } catch (e: IllegalArgumentException) {
                STUDENT
            }
        }
    }
}
