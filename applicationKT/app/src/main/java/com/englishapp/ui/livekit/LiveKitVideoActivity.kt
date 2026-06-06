package com.englishapp.ui.livekit

import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import com.englishapp.databinding.ActivityLivekitVideoBinding
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class LiveKitVideoActivity : AppCompatActivity() {

    private val viewModel: LiveKitViewModel by viewModels()
    private lateinit var binding: ActivityLivekitVideoBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLivekitVideoBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val courseId = intent.getLongExtra("courseId", -1)
        if (courseId != -1L) {
            viewModel.joinRoom(courseId)
        }
        // LiveKit video rendering would be set up here using the room info
    }
}
