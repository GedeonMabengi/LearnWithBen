package com.englishapp.ui.purchase

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.PurchaseSession
import com.englishapp.domain.usecase.PurchaseTokenUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class PurchaseViewModel @Inject constructor(
    private val purchaseTokenUseCase: PurchaseTokenUseCase
) : BaseViewModel() {

    private val _checkoutSession = MutableStateFlow<PurchaseSession?>(null)
    val checkoutSession = _checkoutSession.asStateFlow()

    fun checkout(tokenTypeId: Long) {
        viewModelScope.launch {
            setLoading(true)
            val result = purchaseTokenUseCase(tokenTypeId)
            result.onSuccess {
                _checkoutSession.value = it
            }.onFailure { e ->
                postError(e.message ?: "Checkout failed")
            }
            setLoading(false)
        }
    }
}
