package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class Recording(
    @Json(name = "id") val id: Long,
    @Json(name = "course_id") val courseId: Long,
    @Json(name = "file_url") val fileUrl: String,
    @Json(name = "duration") val duration: Int? = null,
    @Json(name = "course") val course: Course? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
