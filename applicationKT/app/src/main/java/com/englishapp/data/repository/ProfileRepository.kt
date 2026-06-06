package com.englishapp.data.repository

import com.englishapp.data.api.ProfileApi
import com.englishapp.data.model.ProfileUpdateRequest

class ProfileRepository(private val profileApi: ProfileApi) {
    suspend fun getProfile(): Result<com.englishapp.data.model.UserProfile> {
        return try {
            val response = profileApi.getProfile()
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to fetch profile"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun updateProfile(request: ProfileUpdateRequest): Result<Unit> {
        return try {
            val response = profileApi.updateProfile(request)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("Profile update failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
