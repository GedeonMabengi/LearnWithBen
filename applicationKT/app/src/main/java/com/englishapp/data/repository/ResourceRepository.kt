package com.englishapp.data.repository

import com.englishapp.data.api.ResourceApi
import com.englishapp.data.model.ActionRequest

class ResourceRepository(private val resourceApi: ResourceApi) {
    suspend fun getResources(courseId: Long): Result<List<com.englishapp.data.model.Resource>> {
        return try {
            val response = resourceApi.getResources(courseId)
            if (response.isSuccessful) {
                Result.success(response.body() ?: emptyList())
            } else {
                Result.failure(Exception("Failed to fetch resources"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun accessResource(resourceId: Long): Result<Unit> {
        return try {
            val response = resourceApi.accessResource(ActionRequest(resourceId))
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("Failed to access resource"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
