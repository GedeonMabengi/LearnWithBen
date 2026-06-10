package com.englishapp.ui.skill

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.englishapp.R
import com.englishapp.databinding.FragmentSkillListBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.common.Adapters.SkillAdapter
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class SkillListFragment : BaseFragment<SkillViewModel>(R.layout.fragment_skill_list) {

    override val viewModel: SkillViewModel by viewModels()
    private lateinit var binding: FragmentSkillListBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentSkillListBinding.bind(view)

        val adapter = SkillAdapter(emptyList()) { skill ->
            // handle skill click
        }
        binding.rvSkills.layoutManager = LinearLayoutManager(requireContext())
        binding.rvSkills.adapter = adapter

        viewModel.loadSkills()
        lifecycleScope.launch {
            viewModel.skills.collect { skills ->
                adapter.updateData(skills)
            }
        }
    }
}
