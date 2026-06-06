package com.englishapp.domain.usecase

import com.englishapp.data.model.Token
import com.englishapp.data.repository.TokenRepository
import javax.inject.Inject

class RedeemTokenUseCase @Inject constructor(
    private val tokenRepository: TokenRepository
) {
    suspend operator fun invoke(code: String): Result<Token> {
        return tokenRepository.redeemToken(code)
    }
}
