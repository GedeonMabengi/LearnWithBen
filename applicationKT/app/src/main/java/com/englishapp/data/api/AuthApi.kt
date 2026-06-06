package com.englishapp.data.api

import com.englishapp.data.model.AuthResponse
import com.englishapp.data.model.LoginRequest
import com.englishapp.data.model.RegisterRequest
import com.englishapp.data.model.SocialAuthRequest
import com.englishapp.data.model.MessageResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthApi {

    @POST("auth/login")
    suspend fun login(@Body request: LoginRequest): Response<AuthResponse>

    @POST("auth/register")
    suspend fun register(@Body request: RegisterRequest): Response<AuthResponse>

    @POST("auth/social/google")
    suspend fun googleAuth(@Body request: SocialAuthRequest): Response<AuthResponse>

    @POST("auth/social/apple")
    suspend fun appleAuth(@Body request: SocialAuthRequest): Response<AuthResponse>

    @POST("auth/refresh")
    suspend fun refreshToken(): Response<AuthResponse>

    @POST("auth/logout")
    suspend fun logout(): Response<MessageResponse>
}
