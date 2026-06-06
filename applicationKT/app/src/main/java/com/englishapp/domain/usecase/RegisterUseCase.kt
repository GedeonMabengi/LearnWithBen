package com.englishapp.domain.usecase

import com.englishapp.data.model.User
import com.englishapp.data.repository.AuthRepository
import javax.inject.Inject

class RegisterUseCase @Inject constructor(
    private val authRepository: AuthRepository
) {
    suspend operator fun invoke(
        name: String,
        email: String,
        password: String,
        passwordConfirmation: String
    ): Result<User> {
        return authRepository.register(name, email, password, passwordConfirmation)
    }
}
