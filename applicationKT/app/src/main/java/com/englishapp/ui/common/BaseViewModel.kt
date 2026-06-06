package com.englishapp.ui.common

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

abstract class BaseViewModel : ViewModel() {

    private val _loading = MutableStateFlow(false)
    val loading = _loading.asStateFlow()

    private val _error = MutableSharedFlow<String?>()
    val error = _error.asSharedFlow()

    protected fun setLoading(value: Boolean) {
        _loading.value = value
    }

    protected fun postError(message: String) {
        viewModelScope.launch {
            _error.emit(message)
        }
    }
}
