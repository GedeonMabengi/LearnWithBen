package com.englishapp.ui.common.Adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.englishapp.data.model.Recording
import com.englishapp.databinding.ItemRecordingBinding

class RecordingAdapter(
    private var recordings: List<Recording>,
    private val onItemClick: (Recording) -> Unit
) : RecyclerView.Adapter<RecordingAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: ItemRecordingBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemRecordingBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val rec = recordings[position]
        holder.binding.tvCourse.text = rec.course?.title ?: "Recording"
        holder.binding.tvDuration.text = "${rec.duration ?: 0} s"
        holder.binding.root.setOnClickListener { onItemClick(rec) }
    }

    override fun getItemCount() = recordings.size

    fun updateData(newRecordings: List<Recording>) {
        recordings = newRecordings
        notifyDataSetChanged()
    }
}
