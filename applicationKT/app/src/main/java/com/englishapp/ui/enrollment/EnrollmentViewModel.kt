package com.englishapp.ui.enrollment

import androidx.lifecycle.viewModelScope
import com.englishapp.domain.usecase.EnrollCourseUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class EnrollmentViewModel @Inject constructor(
    private val enrollCourseUseCase: EnrollCourseUseCase
) : BaseViewModel() {

    private val _enrollmentSuccess = MutableStateFlow(false)
    val enrollmentSuccess = _enrollmentSuccess.asStateFlow()

    fun enroll(courseId: Long) {
        viewModelScope.launch {
            setLoading(true)
            val result = enrollCourseUseCase(courseId)
            result.onSuccess {
                _enrollmentSuccess.value = true
            }.onFailure { e ->
                postError(e.message ?: "Enrollment failed")
            }
            setLoading(false)
        }
    }
}
