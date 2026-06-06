package com.englishapp.domain.usecase

import com.englishapp.data.model.Token
import com.englishapp.data.repository.TokenRepository
import javax.inject.Inject

class TransferTokenUseCase @Inject constructor(
    private val tokenRepository: TokenRepository
) {
    suspend operator fun invoke(tokenId: Long, recipientEmail: String): Result<Token> {
        return tokenRepository.transferToken(tokenId, recipientEmail)
    }
}
