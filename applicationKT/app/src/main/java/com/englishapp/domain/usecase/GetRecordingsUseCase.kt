package com.englishapp.domain.usecase

import com.englishapp.data.model.Recording
import com.englishapp.data.repository.RecordingRepository
import javax.inject.Inject

class GetRecordingsUseCase @Inject constructor(
    private val recordingRepository: RecordingRepository
) {
    suspend operator fun invoke(): Result<List<Recording>> {
        return recordingRepository.getRecordings()
    }
}
