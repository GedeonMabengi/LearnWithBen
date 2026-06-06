package com.englishapp.data.api

import com.englishapp.data.model.LiveKitTokenResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface LiveKitApi {

    @POST("livekit/join-room")
    suspend fun joinRoom(@Body body: Map<String, @JvmSuppressWildcards Any>): Response<LiveKitTokenResponse>
}
