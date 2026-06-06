package com.englishapp.data.repository

import com.englishapp.data.api.CourseApi
import com.englishapp.data.model.Course

class CourseRepository(private val courseApi: CourseApi) {
    suspend fun getStudentCourses(): Result<List<Course>> {
        return try {
            val response = courseApi.getStudentCourses()
            if (response.isSuccessful) {
                Result.success(response.body() ?: emptyList())
            } else {
                Result.failure(Exception("Failed to fetch courses"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getCourseDetail(courseId: Long): Result<Course> {
        return try {
            val response = courseApi.getStudentCourse(courseId)
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to fetch course"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
