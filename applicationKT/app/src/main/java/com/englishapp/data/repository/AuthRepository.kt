package com.englishapp.data.repository

import com.englishapp.data.api.AuthApi
import com.englishapp.data.local.SharedPreferencesManager
import com.englishapp.data.model.LoginRequest
import com.englishapp.data.model.RegisterRequest
import com.englishapp.data.model.SocialAuthRequest
import com.englishapp.data.model.User

class AuthRepository(
    private val authApi: AuthApi,
    private val prefs: SharedPreferencesManager
) {
    suspend fun login(email: String, password: String): Result<User> {
        return try {
            val response = authApi.login(LoginRequest(email, password))
            if (response.isSuccessful && response.body() != null) {
                val data = response.body()!!
                prefs.saveAccessToken(data.token)
                prefs.saveUserId(data.user.id)
                prefs.saveUserName(data.user.name)
                prefs.saveUserEmail(data.user.email)
                prefs.saveUserRole(data.user.role)
                prefs.saveUserTimezone(data.user.timezone)
                prefs.setIsLoggedIn(true)
                Result.success(data.user)
            } else {
                Result.failure(Exception(response.errorBody()?.string() ?: "Login failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun register(name: String, email: String, password: String, passwordConfirmation: String): Result<User> {
        return try {
            val response = authApi.register(RegisterRequest(name, email, password, passwordConfirmation))
            if (response.isSuccessful && response.body() != null) {
                val data = response.body()!!
                prefs.saveAccessToken(data.token)
                prefs.saveUserId(data.user.id)
                prefs.saveUserName(data.user.name)
                prefs.saveUserEmail(data.user.email)
                prefs.saveUserRole(data.user.role)
                prefs.setIsLoggedIn(true)
                Result.success(data.user)
            } else {
                Result.failure(Exception(response.errorBody()?.string() ?: "Registration failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun loginWithGoogle(idToken: String, email: String, name: String): Result<User> {
        return socialLogin(SocialAuthRequest(googleId = idToken, email = email, name = name))
    }

    suspend fun loginWithApple(appleId: String, email: String, name: String): Result<User> {
        return socialLogin(SocialAuthRequest(appleId = appleId, email = email, name = name))
    }

    private suspend fun socialLogin(request: SocialAuthRequest): Result<User> {
        return try {
            val response = authApi.googleAuth(request)
            if (response.isSuccessful && response.body() != null) {
                val data = response.body()!!
                prefs.saveAccessToken(data.token)
                prefs.saveUserId(data.user.id)
                prefs.saveUserName(data.user.name)
                prefs.saveUserEmail(data.user.email)
                prefs.saveUserRole(data.user.role)
                prefs.setIsLoggedIn(true)
                Result.success(data.user)
            } else {
                Result.failure(Exception("Social authentication failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun refreshToken(): Result<String> {
        return try {
            val response = authApi.refreshToken()
            if (response.isSuccessful && response.body() != null) {
                val token = response.body()!!.token
                prefs.saveAccessToken(token)
                Result.success(token)
            } else {
                logout()
                Result.failure(Exception("Token refresh failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun logout(): Result<Unit> {
        return try {
            try { authApi.logout() } catch (_: Exception) {}
            prefs.clear()
            Result.success(Unit)
        } catch (e: Exception) {
            prefs.clear()
            Result.success(Unit)
        }
    }
}
