package com.englishapp.ui.common.Adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.englishapp.data.model.AppNotification
import com.englishapp.databinding.ItemNotificationBinding
import com.englishapp.util.DateUtil

class NotificationAdapter(
    private var notifications: List<AppNotification>,
    private val onItemClick: (AppNotification) -> Unit
) : RecyclerView.Adapter<NotificationAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: ItemNotificationBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemNotificationBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val notif = notifications[position]
        holder.binding.tvMessage.text = notif.data?.message ?: notif.data?.title ?: ""
        holder.binding.tvDate.text = DateUtil.formatDate(notif.createdAt)
        holder.binding.root.setOnClickListener { onItemClick(notif) }
    }

    override fun getItemCount() = notifications.size

    fun updateData(newNotifications: List<AppNotification>) {
        notifications = newNotifications
        notifyDataSetChanged()
    }
}
