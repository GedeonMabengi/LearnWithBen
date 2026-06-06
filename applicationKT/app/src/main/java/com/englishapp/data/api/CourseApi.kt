package com.englishapp.data.api

import com.englishapp.data.model.Course
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path

interface CourseApi {

    @GET("student/courses")
    suspend fun getStudentCourses(): Response<List<Course>>

    @GET("student/courses/{id}")
    suspend fun getStudentCourse(@Path("id") id: Long): Response<Course>

    @GET("teacher/courses")
    suspend fun getTeacherCourses(): Response<List<Course>>

    @GET("teacher/courses/{id}")
    suspend fun getTeacherCourse(@Path("id") id: Long): Response<Course>
}
