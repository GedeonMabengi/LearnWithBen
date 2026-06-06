package com.englishapp.domain.usecase

import com.englishapp.data.model.Token
import com.englishapp.data.repository.TokenRepository
import javax.inject.Inject

class GetTokensUseCase @Inject constructor(
    private val tokenRepository: TokenRepository
) {
    suspend operator fun invoke(): Result<List<Token>> {
        return tokenRepository.getMyTokens()
    }
}
