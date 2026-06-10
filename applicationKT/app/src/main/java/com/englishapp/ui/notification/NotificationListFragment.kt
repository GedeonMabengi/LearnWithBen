package com.englishapp.ui.notification

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.englishapp.R
import com.englishapp.databinding.FragmentNotificationListBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.common.Adapters.NotificationAdapter
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class NotificationListFragment : BaseFragment<NotificationViewModel>(R.layout.fragment_notification_list) {

    override val viewModel: NotificationViewModel by viewModels()
    private lateinit var binding: FragmentNotificationListBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentNotificationListBinding.bind(view)

        val adapter = NotificationAdapter(emptyList()) { notif ->
            // handle notification click
        }
        binding.rvNotifications.layoutManager = LinearLayoutManager(requireContext())
        binding.rvNotifications.adapter = adapter

        viewModel.loadNotifications()
        lifecycleScope.launch {
            viewModel.notifications.collect { notifications ->
                adapter.updateData(notifications)
            }
        }
    }
}
