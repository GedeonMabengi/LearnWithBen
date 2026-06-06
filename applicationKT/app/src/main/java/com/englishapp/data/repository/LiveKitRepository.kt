package com.englishapp.data.repository

import com.englishapp.data.api.LiveKitApi

class LiveKitRepository(private val liveKitApi: LiveKitApi) {
    suspend fun getRoomAccess(roomId: String): Result<com.englishapp.data.model.LiveKitRoom> {
        return try {
            val response = liveKitApi.getRoomAccess(roomId)
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to get LiveKit room access"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
