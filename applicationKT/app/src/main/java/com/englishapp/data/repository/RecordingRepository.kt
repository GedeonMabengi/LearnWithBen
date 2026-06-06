package com.englishapp.data.repository

import com.englishapp.data.api.RecordingApi

class RecordingRepository(private val recordingApi: RecordingApi) {
    suspend fun getRecordings(courseId: Long): Result<List<com.englishapp.data.model.Recording>> {
        return try {
            val response = recordingApi.getRecordings(courseId)
            if (response.isSuccessful) {
                Result.success(response.body() ?: emptyList())
            } else {
                Result.failure(Exception("Failed to fetch recordings"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
