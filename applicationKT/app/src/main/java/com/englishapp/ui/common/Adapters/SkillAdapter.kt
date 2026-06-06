package com.englishapp.ui.common.Adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.englishapp.data.model.Skill
import com.englishapp.databinding.ItemSkillBinding

class SkillAdapter(
    private var skills: List<Skill>,
    private val onItemClick: (Skill) -> Unit
) : RecyclerView.Adapter<SkillAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: ItemSkillBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemSkillBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val skill = skills[position]
        holder.binding.tvName.text = skill.name
        val studentSkill = skill.studentSkills?.firstOrNull()
        holder.binding.tvStatus.text = if (studentSkill != null) "Validated" else "Pending"
        holder.binding.root.setOnClickListener { onItemClick(skill) }
    }

    override fun getItemCount() = skills.size

    fun updateData(newSkills: List<Skill>) {
        skills = newSkills
        notifyDataSetChanged()
    }
}
