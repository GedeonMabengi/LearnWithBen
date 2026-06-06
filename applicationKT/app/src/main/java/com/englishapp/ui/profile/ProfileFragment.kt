package com.englishapp.ui.profile

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import com.englishapp.R
import com.englishapp.databinding.FragmentProfileBinding
import com.englishapp.ui.common.BaseFragment
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class ProfileFragment : BaseFragment<ProfileViewModel>(R.layout.fragment_profile) {

    override val viewModel: ProfileViewModel by viewModels()
    private lateinit var binding: FragmentProfileBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentProfileBinding.bind(view)

        viewModel.loadProfile()
        lifecycleScope.launch {
            viewModel.user.collect { user ->
                user?.let {
                    binding.tvName.text = it.name
                    binding.tvEmail.text = it.email
                }
            }
        }

        binding.btnEdit.setOnClickListener {
            // Navigate to edit profile
        }
    }
}
