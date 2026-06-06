package com.englishapp.ui.token

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.englishapp.R
import com.englishapp.databinding.FragmentTokenListBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.common.Adapters.TokenAdapter
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch

@AndroidEntryPoint
class TokenListFragment : BaseFragment<TokenViewModel>(R.layout.fragment_token_list) {

    override val viewModel: TokenViewModel by viewModels()
    private lateinit var binding: FragmentTokenListBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentTokenListBinding.bind(view)

        val adapter = TokenAdapter(emptyList()) { token ->
            // Handle token click, e.g. show transfer dialog
        }
        binding.rvTokens.layoutManager = LinearLayoutManager(requireContext())
        binding.rvTokens.adapter = adapter

        binding.btnRedeem.setOnClickListener {
            findNavController().navigate(R.id.action_tokenListFragment_to_redeemTokenFragment)
        }

        viewModel.loadTokens()
        lifecycleScope.launch {
            viewModel.tokens.collect { tokens ->
                adapter.updateData(tokens)
            }
        }
    }
}
