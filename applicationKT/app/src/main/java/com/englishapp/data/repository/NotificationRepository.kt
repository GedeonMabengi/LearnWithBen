package com.englishapp.data.repository

import com.englishapp.data.api.NotificationApi

class NotificationRepository(private val notificationApi: NotificationApi) {
    suspend fun getNotifications(): Result<List<com.englishapp.data.model.Notification>> {
        return try {
            val response = notificationApi.getNotifications()
            if (response.isSuccessful) {
                Result.success(response.body() ?: emptyList())
            } else {
                Result.failure(Exception("Failed to fetch notifications"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
