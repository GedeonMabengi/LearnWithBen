package com.englishapp.ui.recording

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.recyclerview.widget.LinearLayoutManager
import com.englishapp.R
import com.englishapp.databinding.FragmentRecordingListBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.common.Adapters.RecordingAdapter
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class RecordingListFragment : BaseFragment<RecordingViewModel>(R.layout.fragment_recording_list) {

    override val viewModel: RecordingViewModel by viewModels()
    private lateinit var binding: FragmentRecordingListBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentRecordingListBinding.bind(view)

        val adapter = RecordingAdapter(emptyList()) { recording ->
            // Play recording or show detail
        }
        binding.rvRecordings.layoutManager = LinearLayoutManager(requireContext())
        binding.rvRecordings.adapter = adapter

        viewModel.loadRecordings()
        lifecycleScope.launch {
            viewModel.recordings.collect { recordings ->
                adapter.updateData(recordings)
            }
        }
    }
}
