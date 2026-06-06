package com.englishapp.ui.common.Adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.englishapp.data.model.ResourceModel
import com.englishapp.databinding.ItemResourceBinding

class ResourceAdapter(
    private var resources: List<ResourceModel>,
    private val onItemClick: (ResourceModel) -> Unit
) : RecyclerView.Adapter<ResourceAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: ItemResourceBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemResourceBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val resource = resources[position]
        holder.binding.tvTitle.text = resource.title
        holder.binding.root.setOnClickListener { onItemClick(resource) }
    }

    override fun getItemCount() = resources.size

    fun updateData(newResources: List<ResourceModel>) {
        resources = newResources
        notifyDataSetChanged()
    }
}
