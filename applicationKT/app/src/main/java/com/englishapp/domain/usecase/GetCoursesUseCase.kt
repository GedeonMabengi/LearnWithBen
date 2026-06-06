package com.englishapp.domain.usecase

import com.englishapp.data.model.Course
import com.englishapp.data.repository.CourseRepository
import javax.inject.Inject

class GetCoursesUseCase @Inject constructor(
    private val courseRepository: CourseRepository
) {
    suspend operator fun invoke(): Result<List<Course>> {
        return courseRepository.getStudentCourses()
    }
}
