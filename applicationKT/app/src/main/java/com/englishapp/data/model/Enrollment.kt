package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class Enrollment(
    @Json(name = "id") val id: Long,
    @Json(name = "course_id") val courseId: Long,
    @Json(name = "student_id") val studentId: Long,
    @Json(name = "token_id") val tokenId: Long? = null,
    @Json(name = "status") val status: String = "registered",
    @Json(name = "registered_at") val registeredAt: String? = null,
    @Json(name = "cancelled_at") val cancelledAt: String? = null,
    @Json(name = "course") val course: Course? = null,
    @Json(name = "student") val student: User? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
