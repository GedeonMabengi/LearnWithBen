package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class AppNotification(
    @Json(name = "id") val id: String,
    @Json(name = "type") val type: String? = null,
    @Json(name = "data") val data: NotificationData? = null,
    @Json(name = "read_at") val readAt: String? = null,
    @Json(name = "created_at") val createdAt: String? = null
)

@JsonClass(generateAdapter = true)
data class NotificationData(
    @Json(name = "title") val title: String? = null,
    @Json(name = "message") val message: String? = null,
    @Json(name = "action_url") val actionUrl: String? = null
)
