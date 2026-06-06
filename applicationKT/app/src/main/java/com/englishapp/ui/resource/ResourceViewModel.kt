package com.englishapp.ui.resource

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.ResourceModel
import com.englishapp.domain.usecase.GetResourcesUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class ResourceViewModel @Inject constructor(
    private val getResourcesUseCase: GetResourcesUseCase
) : BaseViewModel() {

    private val _resources = MutableStateFlow<List<ResourceModel>>(emptyList())
    val resources = _resources.asStateFlow()

    fun loadResources() {
        viewModelScope.launch {
            setLoading(true)
            val result = getResourcesUseCase()
            result.onSuccess {
                _resources.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load resources")
            }
            setLoading(false)
        }
    }
}
