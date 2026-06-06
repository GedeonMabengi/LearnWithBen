package com.englishapp.util

import java.util.TimeZone

object TimezoneUtil {
    fun getDefaultTimezone(): String {
        return TimeZone.getDefault().id
    }

    fun getTimezoneDisplayName(timezoneId: String): String {
        return TimeZone.getTimeZone(timezoneId).displayName
    }
}
