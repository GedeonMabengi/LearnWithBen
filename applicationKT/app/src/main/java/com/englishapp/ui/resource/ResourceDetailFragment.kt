package com.englishapp.ui.resource

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.fragment.app.viewModels
import com.englishapp.R
import com.englishapp.databinding.FragmentResourceDetailBinding
import com.englishapp.ui.common.BaseFragment
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class ResourceDetailFragment : BaseFragment<ResourceViewModel>(R.layout.fragment_resource_detail) {

    override val viewModel: ResourceViewModel by viewModels()
    private lateinit var binding: FragmentResourceDetailBinding
    private var resourceId: Long = -1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        resourceId = arguments?.getLong("resourceId", -1) ?: -1
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentResourceDetailBinding.bind(view)

        // In real app, load resource detail from API and display
        binding.btnDownload.setOnClickListener {
            // Simulate download
            Toast.makeText(requireContext(), "Download started", Toast.LENGTH_SHORT).show()
        }
    }
}
