package com.englishapp.ui.recording

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.Recording
import com.englishapp.domain.usecase.GetRecordingsUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class RecordingViewModel @Inject constructor(
    private val getRecordingsUseCase: GetRecordingsUseCase
) : BaseViewModel() {

    private val _recordings = MutableStateFlow<List<Recording>>(emptyList())
    val recordings = _recordings.asStateFlow()

    fun loadRecordings() {
        viewModelScope.launch {
            setLoading(true)
            val result = getRecordingsUseCase()
            result.onSuccess {
                _recordings.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load recordings")
            }
            setLoading(false)
        }
    }
}
