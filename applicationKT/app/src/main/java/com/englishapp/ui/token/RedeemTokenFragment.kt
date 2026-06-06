package com.englishapp.ui.token

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import com.englishapp.R
import com.englishapp.databinding.FragmentRedeemTokenBinding
import com.englishapp.ui.common.BaseFragment
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class RedeemTokenFragment : BaseFragment<TokenViewModel>(R.layout.fragment_redeem_token) {

    override val viewModel: TokenViewModel by viewModels()
    private lateinit var binding: FragmentRedeemTokenBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentRedeemTokenBinding.bind(view)

        binding.btnRedeem.setOnClickListener {
            val code = binding.etCode.text.toString()
            if (code.isNotEmpty()) {
                viewModel.redeem(code)
            }
        }

        binding.btnScanQr.setOnClickListener {
            // Launch QR scanner activity for result
        }
    }
}
