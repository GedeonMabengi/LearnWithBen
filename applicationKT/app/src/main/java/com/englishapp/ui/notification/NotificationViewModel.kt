package com.englishapp.ui.notification

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.AppNotification
import com.englishapp.data.repository.NotificationRepository
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class NotificationViewModel @Inject constructor(
    private val notificationRepository: NotificationRepository
) : BaseViewModel() {

    private val _notifications = MutableStateFlow<List<AppNotification>>(emptyList())
    val notifications = _notifications.asStateFlow()

    fun loadNotifications() {
        viewModelScope.launch {
            setLoading(true)
            val result = notificationRepository.getNotifications()
            result.onSuccess {
                _notifications.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load notifications")
            }
            setLoading(false)
        }
    }
}
