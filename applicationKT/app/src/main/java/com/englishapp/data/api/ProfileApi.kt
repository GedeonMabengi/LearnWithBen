package com.englishapp.data.api

import com.englishapp.data.model.User
import com.englishapp.data.model.MessageResponse
import okhttp3.MultipartBody
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Multipart
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Part

interface ProfileApi {

    @GET("user")
    suspend fun getUser(): Response<User>

    @PUT("profile")
    suspend fun updateProfile(@Body body: Map<String, @JvmSuppressWildcards Any>): Response<User>

    @Multipart
    @POST("profile")
    suspend fun uploadAvatar(@Part avatar: MultipartBody.Part): Response<User>

    @PUT("user/fcm-token")
    suspend fun updateFcmToken(@Body body: Map<String, String>): Response<MessageResponse>
}
