package com.englishapp.ui.course

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.Course
import com.englishapp.domain.usecase.GetCoursesUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class CourseViewModel @Inject constructor(
    private val getCoursesUseCase: GetCoursesUseCase
) : BaseViewModel() {

    private val _courses = MutableStateFlow<List<Course>>(emptyList())
    val courses = _courses.asStateFlow()

    fun loadCourses() {
        viewModelScope.launch {
            setLoading(true)
            val result = getCoursesUseCase()
            result.onSuccess {
                _courses.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load courses")
            }
            setLoading(false)
        }
    }
}
