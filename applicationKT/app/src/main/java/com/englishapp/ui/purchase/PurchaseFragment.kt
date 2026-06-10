package com.englishapp.ui.purchase

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.lifecycle.lifecycleScope
import com.englishapp.R
import com.englishapp.databinding.FragmentPurchaseBinding
import com.englishapp.ui.common.BaseFragment
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class PurchaseFragment : BaseFragment<PurchaseViewModel>(R.layout.fragment_purchase) {

    override val viewModel: PurchaseViewModel by viewModels()
    private lateinit var binding: FragmentPurchaseBinding
    private var tokenTypeId: Long = -1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        tokenTypeId = arguments?.getLong("tokenTypeId", -1) ?: -1
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentPurchaseBinding.bind(view)

        // Load token type details from API or local data (simplified)
        binding.btnPurchase.setOnClickListener {
            viewModel.checkout(tokenTypeId)
        }

        lifecycleScope.launch {
            viewModel.checkoutSession.collect { session ->
                if (session != null) {
                    val url = session.stripeCheckoutUrl
                    if (!url.isNullOrEmpty()) {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                        startActivity(intent)
                    }
                }
            }
        }
    }
}
