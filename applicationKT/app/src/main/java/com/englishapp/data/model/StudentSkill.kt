package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class StudentSkill(
    @Json(name = "id") val id: Long,
    @Json(name = "student_id") val studentId: Long,
    @Json(name = "skill_id") val skillId: Long,
    @Json(name = "validated_by") val validatedBy: Long? = null,
    @Json(name = "validated_at") val validatedAt: String? = null,
    @Json(name = "skill") val skill: Skill? = null,
    @Json(name = "created_at") val createdAt: String? = null,
    @Json(name = "updated_at") val updatedAt: String? = null
)
