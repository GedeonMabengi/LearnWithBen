package com.englishapp.ui.token

import androidx.lifecycle.viewModelScope
import com.englishapp.data.model.Token
import com.englishapp.domain.usecase.GetTokensUseCase
import com.englishapp.domain.usecase.RedeemTokenUseCase
import com.englishapp.domain.usecase.TransferTokenUseCase
import com.englishapp.ui.common.BaseViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class TokenViewModel @Inject constructor(
    private val getTokensUseCase: GetTokensUseCase,
    private val redeemTokenUseCase: RedeemTokenUseCase,
    private val transferTokenUseCase: TransferTokenUseCase
) : BaseViewModel() {

    private val _tokens = MutableStateFlow<List<Token>>(emptyList())
    val tokens = _tokens.asStateFlow()

    private val _redeemResult = MutableStateFlow<Token?>(null)
    val redeemResult = _redeemResult.asStateFlow()

    private val _transferResult = MutableStateFlow<Token?>(null)
    val transferResult = _transferResult.asStateFlow()

    fun loadTokens() {
        viewModelScope.launch {
            setLoading(true)
            val result = getTokensUseCase()
            result.onSuccess {
                _tokens.value = it
            }.onFailure { e ->
                postError(e.message ?: "Failed to load tokens")
            }
            setLoading(false)
        }
    }

    fun redeem(code: String) {
        viewModelScope.launch {
            setLoading(true)
            val result = redeemTokenUseCase(code)
            result.onSuccess {
                _redeemResult.value = it
                loadTokens()
            }.onFailure { e ->
                postError(e.message ?: "Failed to redeem token")
            }
            setLoading(false)
        }
    }

    fun transfer(tokenId: Long, recipientEmail: String) {
        viewModelScope.launch {
            setLoading(true)
            val result = transferTokenUseCase(tokenId, recipientEmail)
            result.onSuccess {
                _transferResult.value = it
                loadTokens()
            }.onFailure { e ->
                postError(e.message ?: "Transfer failed")
            }
            setLoading(false)
        }
    }
}
