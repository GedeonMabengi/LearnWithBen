package com.englishapp.data.api

import com.englishapp.data.model.AppNotification
import com.englishapp.data.model.PaginatedResponse
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Query

interface NotificationApi {

    @GET("student/notifications")
    suspend fun getNotifications(@Query("page") page: Int = 1): Response<PaginatedResponse<AppNotification>>
}
