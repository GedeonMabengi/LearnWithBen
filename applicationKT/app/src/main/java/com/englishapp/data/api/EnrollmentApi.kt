package com.englishapp.data.api

import com.englishapp.data.model.Enrollment
import com.englishapp.data.model.MessageResponse
import retrofit2.Response
import retrofit2.http.DELETE
import retrofit2.http.POST
import retrofit2.http.Path

interface EnrollmentApi {

    @POST("student/courses/{id}/enroll")
    suspend fun enroll(@Path("id") courseId: Long): Response<MessageResponse>

    @DELETE("student/enrollments/{id}")
    suspend fun cancelEnrollment(@Path("id") enrollmentId: Long): Response<Enrollment>
}
