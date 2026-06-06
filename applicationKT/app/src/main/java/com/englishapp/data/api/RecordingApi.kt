package com.englishapp.data.api

import com.englishapp.data.model.Recording
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path

interface RecordingApi {

    @GET("student/recordings")
    suspend fun getRecordings(): Response<List<Recording>>

    @GET("student/recordings/{id}")
    suspend fun getRecording(@Path("id") id: Long): Response<Recording>
}
