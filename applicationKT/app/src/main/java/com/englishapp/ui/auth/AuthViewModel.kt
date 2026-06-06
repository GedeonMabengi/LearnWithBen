package com.englishapp.ui.auth

import androidx.lifecycle.viewModelScope
import com.englishapp.data.local.SharedPreferencesManager
import com.englishapp.domain.usecase.LoginUseCase
import com.englishapp.domain.usecase.RegisterUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class AuthViewModel @Inject constructor(
    private val loginUseCase: LoginUseCase,
    private val registerUseCase: RegisterUseCase,
    private val sharedPreferencesManager: SharedPreferencesManager
) : BaseViewModel() {

    private val _loginSuccess = MutableStateFlow(false)
    val loginSuccess = _loginSuccess.asStateFlow()

    private val _registerSuccess = MutableStateFlow(false)
    val registerSuccess = _registerSuccess.asStateFlow()

    fun login(email: String, password: String) {
        viewModelScope.launch {
            setLoading(true)
            val result = loginUseCase(email, password)
            result.onSuccess {
                _loginSuccess.value = true
            }.onFailure { e ->
                postError(e.message ?: "Login failed")
            }
            setLoading(false)
        }
    }

    fun register(name: String, email: String, password: String, confirmPassword: String) {
        viewModelScope.launch {
            setLoading(true)
            val result = registerUseCase(name, email, password, confirmPassword)
            result.onSuccess {
                _registerSuccess.value = true
            }.onFailure { e ->
                postError(e.message ?: "Registration failed")
            }
            setLoading(false)
        }
    }

    fun isLoggedIn(): Boolean = sharedPreferencesManager.isLoggedIn()
}
