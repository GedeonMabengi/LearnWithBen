package com.englishapp.domain.usecase

import com.englishapp.data.model.User
import com.englishapp.data.repository.ProfileRepository
import javax.inject.Inject

class UpdateProfileUseCase @Inject constructor(
    private val profileRepository: ProfileRepository
) {
    suspend operator fun invoke(name: String, email: String, timezone: String): Result<User> {
        return profileRepository.updateProfile(name, email, timezone)
    }
}
