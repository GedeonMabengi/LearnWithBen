package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class User(
    @Json(name = "id") val id: Long,
    @Json(name = "name") val name: String,
    @Json(name = "email") val email: String,
    @Json(name = "role") val role: String = "student",
    @Json(name = "google_id") val googleId: String? = null,
    @Json(name = "apple_id") val appleId: String? = null,
    @Json(name = "avatar_url") val avatarUrl: String? = null,
    @Json(name = "timezone") val timezone: String = "UTC",
    @Json(name = "fcm_token") val fcmToken: String? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
