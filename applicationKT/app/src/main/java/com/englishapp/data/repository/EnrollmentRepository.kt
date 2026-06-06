package com.englishapp.data.repository

import com.englishapp.data.api.EnrollmentApi

class EnrollmentRepository(private val enrollmentApi: EnrollmentApi) {
    suspend fun enroll(courseId: Long): Result<Unit> {
        return try {
            val response = enrollmentApi.enroll(courseId)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception(response.errorBody()?.string() ?: "Enrollment failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun cancelEnrollment(enrollmentId: Long): Result<Unit> {
        return try {
            val response = enrollmentApi.cancelEnrollment(enrollmentId)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("Failed to cancel enrollment"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
