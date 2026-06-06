package com.englishapp.data.repository

import com.englishapp.data.api.PurchaseApi
import com.englishapp.data.model.PurchaseRequest

class PurchaseRepository(private val purchaseApi: PurchaseApi) {
    suspend fun makePurchase(request: PurchaseRequest): Result<Unit> {
        return try {
            val response = purchaseApi.makePurchase(request)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("Purchase failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
