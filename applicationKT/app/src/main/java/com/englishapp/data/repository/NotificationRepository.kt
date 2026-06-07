package com.englishapp.data.repository

import com.englishapp.data.api.NotificationApi
import com.englishapp.data.model.Notification

class NotificationRepository(private val notificationApi: NotificationApi) {
    suspend fun getNotifications(): Result<List<Notification>> {
        return try {
            val response = notificationApi.getNotifications()
            if (response.isSuccessful) {
                Result.success(response.body()?.data.orEmpty())
            } else {
                Result.failure(Exception("Failed to fetch notifications"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
