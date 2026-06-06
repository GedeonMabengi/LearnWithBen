package com.englishapp.data.repository

import com.englishapp.data.api.SkillApi

class SkillRepository(private val skillApi: SkillApi) {
    suspend fun getSkills(courseId: Long): Result<List<com.englishapp.data.model.Skill>> {
        return try {
            val response = skillApi.getSkills(courseId)
            if (response.isSuccessful) {
                Result.success(response.body() ?: emptyList())
            } else {
                Result.failure(Exception("Failed to fetch skills"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
