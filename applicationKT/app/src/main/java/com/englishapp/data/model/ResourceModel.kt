package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class ResourceModel(
    @Json(name = "id") val id: Long,
    @Json(name = "teacher_id") val teacherId: Long,
    @Json(name = "title") val title: String,
    @Json(name = "description") val description: String? = null,
    @Json(name = "file_path") val filePath: String,
    @Json(name = "visibility") val visibility: String,
    @Json(name = "token_type_id") val tokenTypeId: Long? = null,
    @Json(name = "access_code") val accessCode: String? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
