package com.englishapp.domain.usecase

import com.englishapp.data.model.PurchaseSession
import com.englishapp.data.repository.PurchaseRepository
import javax.inject.Inject

class PurchaseTokenUseCase @Inject constructor(
    private val purchaseRepository: PurchaseRepository
) {
    suspend operator fun invoke(tokenTypeId: Long): Result<PurchaseSession> {
        return purchaseRepository.checkout(tokenTypeId)
    }
}
