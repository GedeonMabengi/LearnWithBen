package com.englishapp.ui.common.Adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.englishapp.data.model.Token
import com.englishapp.databinding.ItemTokenBinding

class TokenAdapter(
    private var tokens: List<Token>,
    private val onItemClick: (Token) -> Unit
) : RecyclerView.Adapter<TokenAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: ItemTokenBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemTokenBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val token = tokens[position]
        holder.binding.tvType.text = token.tokenType?.name ?: token.code
        holder.binding.tvStatus.text = token.status
        holder.binding.root.setOnClickListener { onItemClick(token) }
    }

    override fun getItemCount() = tokens.size

    fun updateData(newTokens: List<Token>) {
        tokens = newTokens
        notifyDataSetChanged()
    }
}
