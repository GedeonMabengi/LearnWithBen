package com.englishapp.data.repository

import com.englishapp.data.api.TokenApi
import com.englishapp.data.model.TokenRequest

class TokenRepository(private val tokenApi: TokenApi) {
    suspend fun purchaseTokens(tokenRequest: TokenRequest): Result<Unit> {
        return try {
            val response = tokenApi.purchaseTokens(tokenRequest)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("Token purchase failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getTokenBalance(): Result<Int> {
        return try {
            val response = tokenApi.getTokenBalance()
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!.balance)
            } else {
                Result.failure(Exception("Failed to fetch token balance"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
