package com.englishapp.data.repository

import com.englishapp.data.api.FcmApi

class FcmTokenRepository(private val fcmApi: FcmApi) {
    suspend fun registerToken(fcmToken: String): Result<Unit> {
        return try {
            val response = fcmApi.registerFcmToken(fcmToken)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("FCM token registration failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
