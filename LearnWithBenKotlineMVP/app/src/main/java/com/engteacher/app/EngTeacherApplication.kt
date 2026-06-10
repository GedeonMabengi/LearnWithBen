package com.engteacher.app

import android.app.Application
import com.google.firebase.FirebaseApp
import org.jitsi.meet.sdk.JitsiMeet
import org.jitsi.meet.sdk.JitsiMeetConferenceOptions
import java.net.URL

class EngTeacherApplication : Application() {

    override fun onCreate() {
        super.onCreate()

        // Initialize Firebase
        FirebaseApp.initializeApp(this)

        // Initialize Jitsi Meet with default options
        val serverURL: URL = try {
            URL("https://meet.jit.si")
        } catch (e: Exception) {
            e.printStackTrace()
            return
        }

        val defaultOptions = JitsiMeetConferenceOptions.Builder()
            .setServerURL(serverURL)
            .setConfigOverride("prejoinPageEnabled", false)
            .setFeatureFlag("welcomepage.enabled", false)
            .build()

        JitsiMeet.setDefaultConferenceOptions(defaultOptions)
    }
}
