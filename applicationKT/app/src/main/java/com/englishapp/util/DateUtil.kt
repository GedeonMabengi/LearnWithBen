package com.englishapp.util

import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.TimeZone

object DateUtil {

    fun formatDate(dateString: String?, fromFormat: String = Constants.DATE_FORMAT, toFormat: String = Constants.DISPLAY_DATE_FORMAT, timezone: String? = null): String {
        if (dateString.isNullOrEmpty()) return ""
        return try {
            val inputFormat = SimpleDateFormat(fromFormat, Locale.getDefault())
            inputFormat.timeZone = TimeZone.getTimeZone(timezone ?: Constants.DEFAULT_TIMEZONE)
            val date = inputFormat.parse(dateString)
            val outputFormat = SimpleDateFormat(toFormat, Locale.getDefault())
            outputFormat.timeZone = TimeZone.getTimeZone(timezone ?: Constants.DEFAULT_TIMEZONE)
            date?.let { outputFormat.format(it) } ?: dateString
        } catch (e: Exception) {
            dateString
        }
    }

    fun formatTime(dateString: String?, timezone: String? = null): String {
        if (dateString.isNullOrEmpty()) return ""
        return formatDate(dateString, Constants.DATE_FORMAT, "HH:mm", timezone)
    }
}
