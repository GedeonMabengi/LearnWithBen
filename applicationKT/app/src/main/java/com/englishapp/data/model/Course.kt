package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class Course(
    @Json(name = "id") val id: Long,
    @Json(name = "teacher_id") val teacherId: Long,
    @Json(name = "title") val title: String,
    @Json(name = "description") val description: String? = null,
    @Json(name = "start_time") val startTime: String,
    @Json(name = "end_time") val endTime: String,
    @Json(name = "timezone") val timezone: String = "UTC",
    @Json(name = "max_participants") val maxParticipants: Int? = null,
    @Json(name = "visibility") val visibility: String,
    @Json(name = "token_type_id") val tokenTypeId: Long? = null,
    @Json(name = "access_code") val accessCode: String? = null,
    @Json(name = "is_recurring") val isRecurring: Boolean = false,
    @Json(name = "parent_course_id") val parentCourseId: Long? = null,
    @Json(name = "token_type") val tokenType: TokenType? = null,
    @Json(name = "teacher") val teacher: User? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
