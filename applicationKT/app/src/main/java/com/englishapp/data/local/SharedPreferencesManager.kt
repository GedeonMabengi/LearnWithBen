package com.englishapp.data.local

import android.content.Context
import android.content.SharedPreferences
import dagger.hilt.android.qualifiers.ApplicationContext
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class SharedPreferencesManager @Inject constructor(
    @ApplicationContext context: Context
) {
    private val prefs: SharedPreferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    companion object {
        private const val PREFS_NAME = "english_app_prefs"
        private const val KEY_ACCESS_TOKEN = "access_token"
        private const val KEY_USER_ID = "user_id"
        private const val KEY_USER_NAME = "user_name"
        private const val KEY_USER_EMAIL = "user_email"
        private const val KEY_USER_ROLE = "user_role"
        private const val KEY_USER_TIMEZONE = "user_timezone"
        private const val KEY_IS_LOGGED_IN = "is_logged_in"
    }

    // Access Token
    fun saveAccessToken(token: String) = prefs.edit().putString(KEY_ACCESS_TOKEN, token).apply()
    fun getAccessToken(): String? = prefs.getString(KEY_ACCESS_TOKEN, null)

    // User Info
    fun saveUserId(id: Long) = prefs.edit().putLong(KEY_USER_ID, id).apply()
    fun getUserId(): Long = prefs.getLong(KEY_USER_ID, -1)

    fun saveUserName(name: String) = prefs.edit().putString(KEY_USER_NAME, name).apply()
    fun getUserName(): String? = prefs.getString(KEY_USER_NAME, null)

    fun saveUserEmail(email: String) = prefs.edit().putString(KEY_USER_EMAIL, email).apply()
    fun getUserEmail(): String? = prefs.getString(KEY_USER_EMAIL, null)

    fun saveUserRole(role: String) = prefs.edit().putString(KEY_USER_ROLE, role).apply()
    fun getUserRole(): String? = prefs.getString(KEY_USER_ROLE, null)

    fun saveUserTimezone(timezone: String) = prefs.edit().putString(KEY_USER_TIMEZONE, timezone).apply()
    fun getUserTimezone(): String? = prefs.getString(KEY_USER_TIMEZONE, "UTC")

    // Login state
    fun setIsLoggedIn(loggedIn: Boolean) = prefs.edit().putBoolean(KEY_IS_LOGGED_IN, loggedIn).apply()
    fun isLoggedIn(): Boolean = prefs.getBoolean(KEY_IS_LOGGED_IN, false)

    // Clear all
    fun clear() = prefs.edit().clear().apply()
}
