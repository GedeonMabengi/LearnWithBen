package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class TokenType(
    @Json(name = "id") val id: Long,
    @Json(name = "teacher_id") val teacherId: Long,
    @Json(name = "name") val name: String,
    @Json(name = "type") val type: String,
    @Json(name = "validity_type") val validityType: String,
    @Json(name = "valid_from") val validFrom: String? = null,
    @Json(name = "valid_until") val validUntil: String? = null,
    @Json(name = "max_uses") val maxUses: Int? = null,
    @Json(name = "price") val price: Int? = null,
    @Json(name = "currency") val currency: String = "EUR",
    @Json(name = "is_transferable") val isTransferable: Boolean = false,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
