package com.englishapp.ui.resource

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.englishapp.R
import com.englishapp.databinding.FragmentResourceListBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.common.Adapters.ResourceAdapter
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class ResourceListFragment : BaseFragment<ResourceViewModel>(R.layout.fragment_resource_list) {

    override val viewModel: ResourceViewModel by viewModels()
    private lateinit var binding: FragmentResourceListBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentResourceListBinding.bind(view)

        val adapter = ResourceAdapter(emptyList()) { resource ->
            findNavController().navigate(
                ResourceListFragmentDirections.actionResourceListFragmentToResourceDetailFragment(resource.id)
            )
        }
        binding.rvResources.layoutManager = LinearLayoutManager(requireContext())
        binding.rvResources.adapter = adapter

        viewModel.loadResources()
        lifecycleScope.launch {
            viewModel.resources.collect { resources ->
                adapter.updateData(resources)
            }
        }
    }
}
