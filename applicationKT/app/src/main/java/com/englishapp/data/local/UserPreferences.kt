package com.englishapp.data.local

import android.content.Context
import dagger.hilt.android.qualifiers.ApplicationContext
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Simplified wrapper for user-specific preferences.
 */
@Singleton
class UserPreferences @Inject constructor(
    @ApplicationContext context: Context
) {
    private val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    companion object {
        private const val PREFS_NAME = "user_prefs"
        private const val KEY_FCM_TOKEN = "fcm_token"
        private const val KEY_SELECTED_COURSE_ID = "selected_course_id"
        private const val KEY_LAST_SYNC_TIME = "last_sync_time"
    }

    var fcmToken: String?
        get() = prefs.getString(KEY_FCM_TOKEN, null)
        set(value) = prefs.edit().putString(KEY_FCM_TOKEN, value).apply()

    var selectedCourseId: Long
        get() = prefs.getLong(KEY_SELECTED_COURSE_ID, -1)
        set(value) = prefs.edit().putLong(KEY_SELECTED_COURSE_ID, value).apply()

    var lastSyncTime: Long
        get() = prefs.getLong(KEY_LAST_SYNC_TIME, 0)
        set(value) = prefs.edit().putLong(KEY_LAST_SYNC_TIME, value).apply()

    fun clear() = prefs.edit().clear().apply()
}
