package com.englishapp.ui.profile

import androidx.lifecycle.viewModelScope
import com.englishapp.data.local.SharedPreferencesManager
import com.englishapp.data.model.User
import com.englishapp.data.repository.ProfileRepository
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class ProfileViewModel @Inject constructor(
    private val profileRepository: ProfileRepository,
    private val sharedPreferencesManager: SharedPreferencesManager
) : BaseViewModel() {

    private val _user = MutableStateFlow<User?>(null)
    val user = _user.asStateFlow()

    private val _updateSuccess = MutableStateFlow(false)
    val updateSuccess = _updateSuccess.asStateFlow()

    fun loadProfile() {
        viewModelScope.launch {
            setLoading(true)
            val result = profileRepository.getProfile()
            result.onSuccess {
                _user.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load profile")
            }
            setLoading(false)
        }
    }

    fun updateProfile(name: String, email: String, timezone: String) {
        viewModelScope.launch {
            setLoading(true)
            val result = profileRepository.updateProfile(name, email, timezone)
            result.onSuccess {
                _user.value = it
                _updateSuccess.value = true
            }.onFailure { e ->
                postError(e.message ?: "Profile update failed")
            }
            setLoading(false)
        }
    }
}
