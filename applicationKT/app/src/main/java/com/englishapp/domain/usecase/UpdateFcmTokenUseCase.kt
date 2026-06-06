package com.englishapp.domain.usecase

import com.englishapp.data.repository.FcmTokenRepository
import javax.inject.Inject

class UpdateFcmTokenUseCase @Inject constructor(
    private val fcmTokenRepository: FcmTokenRepository
) {
    suspend operator fun invoke(token: String): Result<Unit> {
        return fcmTokenRepository.updateFcmToken(token)
    }
}
