package com.englishapp.receiver

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

class NotificationReceiver : BroadcastReceiver() {

    companion object {
        private const val TAG = "NotificationReceiver"
        const val ACTION_COURSE_REMINDER = "com.englishapp.COURSE_REMINDER"
        const val ACTION_TOKEN_EXPIRY = "com.englishapp.TOKEN_EXPIRY"
        const val EXTRA_COURSE_ID = "extra_course_id"
        const val EXTRA_TOKEN_ID = "extra_token_id"
    }

    override fun onReceive(context: Context, intent: Intent) {
        Log.d(TAG, "Received broadcast: ${intent.action}")

        when (intent.action) {
            ACTION_COURSE_REMINDER -> {
                val courseId = intent.getLongExtra(EXTRA_COURSE_ID, -1)
                if (courseId != -1L) {
                    handleCourseReminder(context, courseId)
                }
            }
            ACTION_TOKEN_EXPIRY -> {
                val tokenId = intent.getLongExtra(EXTRA_TOKEN_ID, -1)
                if (tokenId != -1L) {
                    handleTokenExpiry(context, tokenId)
                }
            }
        }
    }

    private fun handleCourseReminder(context: Context, courseId: Long) {
        // Optionally launch an activity or show a heads-up notification
        Log.d(TAG, "Course reminder for course ID: $courseId")
    }

    private fun handleTokenExpiry(context: Context, tokenId: Long) {
        // Optionally show a notification that a token is about to expire
        Log.d(TAG, "Token expiry notification for token ID: $tokenId")
    }
}
