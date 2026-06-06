package com.englishapp.data.api

import com.englishapp.data.model.PurchaseSession
import com.englishapp.data.model.MessageResponse
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path

interface PurchaseApi {

    @POST("student/token-types/{id}/purchase")
    suspend fun checkout(@Path("id") tokenTypeId: Long): Response<PurchaseSession>

    @GET("student/purchase/success")
    suspend fun success(): Response<MessageResponse>

    @GET("student/purchase/cancel")
    suspend fun cancel(): Response<MessageResponse>
}
