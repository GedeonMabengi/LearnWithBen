package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class TeacherNote(
    @Json(name = "id") val id: Long,
    @Json(name = "teacher_id") val teacherId: Long,
    @Json(name = "student_id") val studentId: Long,
    @Json(name = "course_id") val courseId: Long? = null,
    @Json(name = "note") val note: String,
    @Json(name = "course") val course: Course? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
