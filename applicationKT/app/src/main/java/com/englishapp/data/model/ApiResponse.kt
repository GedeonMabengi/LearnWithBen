package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class AuthResponse(
    @Json(name = "user") val user: User,
    @Json(name = "token") val token: String
)

@JsonClass(generateAdapter = true)
data class LoginRequest(
    @Json(name = "email") val email: String,
    @Json(name = "password") val password: String,
    @Json(name = "remember") val remember: Boolean = false
)

@JsonClass(generateAdapter = true)
data class RegisterRequest(
    @Json(name = "name") val name: String,
    @Json(name = "email") val email: String,
    @Json(name = "password") val password: String,
    @Json(name = "password_confirmation") val passwordConfirmation: String
)

@JsonClass(generateAdapter = true)
data class SocialAuthRequest(
    @Json(name = "google_id") val googleId: String? = null,
    @Json(name = "apple_id") val appleId: String? = null,
    @Json(name = "email") val email: String,
    @Json(name = "name") val name: String
)

@JsonClass(generateAdapter = true)
data class MessageResponse(
    @Json(name = "message") val message: String
)

@JsonClass(generateAdapter = true)
data class PaginatedResponse<T>(
    @Json(name = "data") val data: List<T>? = null
)
