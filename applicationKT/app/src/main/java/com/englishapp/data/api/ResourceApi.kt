package com.englishapp.data.api

import com.englishapp.data.model.ResourceModel
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path

interface ResourceApi {

    @GET("student/resources")
    suspend fun getResources(): Response<List<ResourceModel>>

    @GET("student/resources/{id}")
    suspend fun getResource(@Path("id") id: Long): Response<ResourceModel>
}
