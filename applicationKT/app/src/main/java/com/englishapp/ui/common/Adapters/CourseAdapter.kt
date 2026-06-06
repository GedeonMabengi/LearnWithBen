package com.englishapp.ui.common.Adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.englishapp.data.model.Course
import com.englishapp.databinding.ItemCourseBinding
import com.englishapp.util.DateUtil

class CourseAdapter(
    private var courses: List<Course>,
    private val onItemClick: (Course) -> Unit
) : RecyclerView.Adapter<CourseAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: ItemCourseBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemCourseBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val course = courses[position]
        holder.binding.tvTitle.text = course.title
        holder.binding.tvTime.text = DateUtil.formatDate(course.startTime)
        holder.binding.root.setOnClickListener { onItemClick(course) }
    }

    override fun getItemCount() = courses.size

    fun updateData(newCourses: List<Course>) {
        courses = newCourses
        notifyDataSetChanged()
    }
}
