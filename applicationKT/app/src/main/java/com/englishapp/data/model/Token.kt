package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class Token(
    @Json(name = "id") val id: Long,
    @Json(name = "token_type_id") val tokenTypeId: Long,
    @Json(name = "owner_id") val ownerId: Long? = null,
    @Json(name = "code") val code: String,
    @Json(name = "remaining_uses") val remainingUses: Int? = null,
    @Json(name = "expires_at") val expiresAt: String? = null,
    @Json(name = "status") val status: String = "active",
    @Json(name = "token_type") val tokenType: TokenType? = null,
    @Json(name = "owner") val owner: User? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
