package com.englishapp.domain.usecase

import com.englishapp.data.model.LiveKitTokenResponse
import com.englishapp.data.repository.LiveKitRepository
import javax.inject.Inject

class JoinCourseUseCase @Inject constructor(
    private val liveKitRepository: LiveKitRepository
) {
    suspend operator fun invoke(courseId: Long): Result<LiveKitTokenResponse> {
        return liveKitRepository.joinRoom(courseId)
    }
}
