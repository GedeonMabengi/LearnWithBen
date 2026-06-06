package com.englishapp.data.api

import com.englishapp.data.model.Token
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path

interface TokenApi {

    @GET("student/tokens")
    suspend fun getMyTokens(): Response<List<Token>>

    @POST("student/tokens/redeem")
    suspend fun redeemToken(@Body body: Map<String, String>): Response<Token>

    @POST("student/tokens/claim")
    suspend fun claimToken(@Body body: Map<String, String>): Response<Token>

    @POST("student/tokens/{id}/transfer")
    suspend fun transferToken(
        @Path("id") tokenId: Long,
        @Body body: Map<String, String>
    ): Response<Token>
}
