package com.englishapp.service

import android.content.Context
import android.util.Log
import com.englishapp.data.local.SharedPreferencesManager
import com.englishapp.data.repository.FcmTokenRepository
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class FCMTokenManager @Inject constructor(
    @ApplicationContext private val context: Context,
    private val fcmTokenRepository: FcmTokenRepository,
    private val sharedPreferencesManager: SharedPreferencesManager
) {
    companion object {
        private const val TAG = "FCMTokenManager"
        private var instance: FCMTokenManager? = null

        fun getInstance(context: Context): FCMTokenManager {
            // Fallback if Hilt DI is not available for FCM service
            // In production, use Hilt injection via Service binding if possible
            return instance ?: synchronized(this) {
                instance ?: FCMTokenManager(
                    context.applicationContext,
                    // This manual resolution is a simplification.
                    // In practice, you'd use EntryPointAccessors.fromApplication() for Hilt in Services
                    context.applicationContext.let { appContext ->
                        val manager = appContext.getSharedPreferences("english_app_prefs", Context.MODE_PRIVATE)
                        object : SharedPreferencesManager(appContext) {}
                    }
                ).also { instance = it }
            }
        }
    }

    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
    private var pendingToken: String? = null

    fun onNewToken(token: String) {
        Log.d(TAG, "Received new FCM token: $token")
        pendingToken = token
        if (sharedPreferencesManager.isLoggedIn()) {
            sendTokenToServer(token)
        }
    }

    fun sendTokenIfPending() {
        pendingToken?.let { token ->
            sendTokenToServer(token)
        }
    }

    fun clearToken() {
        pendingToken = null
    }

    private fun sendTokenToServer(token: String) {
        scope.launch {
            try {
                val result = fcmTokenRepository.updateFcmToken(token)
                result.onSuccess {
                    Log.d(TAG, "FCM token updated on server successfully")
                    pendingToken = null
                }.onFailure { error ->
                    Log.e(TAG, "Failed to update FCM token on server: ${error.message}")
                }
            } catch (e: Exception) {
                Log.e(TAG, "Exception updating FCM token: ${e.message}")
            }
        }
    }
}
