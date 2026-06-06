package com.englishapp.ui.livekit

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.LiveKitTokenResponse
import com.englishapp.domain.usecase.JoinCourseUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class LiveKitViewModel @Inject constructor(
    private val joinCourseUseCase: JoinCourseUseCase
) : BaseViewModel() {

    private val _roomInfo = MutableStateFlow<LiveKitTokenResponse?>(null)
    val roomInfo = _roomInfo.asStateFlow()

    fun joinRoom(courseId: Long) {
        viewModelScope.launch {
            setLoading(true)
            val result = joinCourseUseCase(courseId)
            result.onSuccess {
                _roomInfo.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to join room")
            }
            setLoading(false)
        }
    }
}
