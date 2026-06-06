package com.englishapp.ui.skill

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.Skill
import com.englishapp.domain.usecase.GetSkillsUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class SkillViewModel @Inject constructor(
    private val getSkillsUseCase: GetSkillsUseCase
) : BaseViewModel() {

    private val _skills = MutableStateFlow<List<Skill>>(emptyList())
    val skills = _skills.asStateFlow()

    fun loadSkills() {
        viewModelScope.launch {
            setLoading(true)
            val result = getSkillsUseCase()
            result.onSuccess {
                _skills.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load skills")
            }
            setLoading(false)
        }
    }
}
