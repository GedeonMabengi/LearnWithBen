package com.engteacher.app.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.engteacher.app.data.AuthResult
import com.engteacher.app.data.FirebaseAuthManager
import com.engteacher.app.model.User
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class AuthViewModel : ViewModel() {

    private val authManager = FirebaseAuthManager()

    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser.asStateFlow()

    private val _authState = MutableStateFlow<AuthResult<User>>(AuthResult.Loading)
    val authState: StateFlow<AuthResult<User>> = _authState.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    private val _errorMessage = MutableStateFlow<String?>(null)
    val errorMessage: StateFlow<String?> = _errorMessage.asStateFlow()

    private val _successMessage = MutableStateFlow<String?>(null)
    val successMessage: StateFlow<String?> = _successMessage.asStateFlow()

    init {
        viewModelScope.launch {
            authManager.getCurrentUserFlow().collect { user ->
                _currentUser.value = user
                if (user != null) {
                    _authState.value = AuthResult.Success(user)
                } else {
                    _authState.value = AuthResult.Error("Non connecté")
                }
            }
        }
    }

    fun login(email: String, password: String) {
        viewModelScope.launch {
            _isLoading.value = true
            _errorMessage.value = null
            val result = authManager.signIn(email, password)
            when (result) {
                is AuthResult.Success -> {
                    _authState.value = result
                }
                is AuthResult.Error -> {
                    _errorMessage.value = result.message
                }
                else -> {}
            }
            _isLoading.value = false
        }
    }

    fun register(email: String, password: String, displayName: String) {
        viewModelScope.launch {
            _isLoading.value = true
            _errorMessage.value = null
            val result = authManager.signUp(email, password, displayName)
            when (result) {
                is AuthResult.Success -> {
                    _successMessage.value = "Compte créé ! En attente d'approbation du professeur."
                }
                is AuthResult.Error -> {
                    _errorMessage.value = result.message
                }
                else -> {}
            }
            _isLoading.value = false
        }
    }

    fun createAdminAccount(email: String, password: String, displayName: String) {
        viewModelScope.launch {
            _isLoading.value = true
            _errorMessage.value = null
            val result = authManager.checkAndCreateAdmin(email, password, displayName)
            when (result) {
                is AuthResult.Success -> {
                    _successMessage.value = "Compte administrateur créé avec succès !"
                }
                is AuthResult.Error -> {
                    _errorMessage.value = result.message
                }
                else -> {}
            }
            _isLoading.value = false
        }
    }

    fun logout() {
        authManager.signOut()
        _currentUser.value = null
        _authState.value = AuthResult.Error("Déconnecté")
        _errorMessage.value = null
        _successMessage.value = null
    }

    fun clearMessages() {
        _errorMessage.value = null
        _successMessage.value = null
    }

    fun approveStudent(userId: String) {
        viewModelScope.launch {
            authManager.updateUserApproval(userId, true)
        }
    }

    fun rejectStudent(userId: String) {
        viewModelScope.launch {
            authManager.updateUserApproval(userId, false)
        }
    }
}
