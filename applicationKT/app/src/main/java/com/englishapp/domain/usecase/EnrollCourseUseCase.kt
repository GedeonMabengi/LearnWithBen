package com.englishapp.domain.usecase

import com.englishapp.data.repository.EnrollmentRepository
import javax.inject.Inject

class EnrollCourseUseCase @Inject constructor(
    private val enrollmentRepository: EnrollmentRepository
) {
    suspend operator fun invoke(courseId: Long): Result<Unit> {
        return enrollmentRepository.enroll(courseId)
    }
}
