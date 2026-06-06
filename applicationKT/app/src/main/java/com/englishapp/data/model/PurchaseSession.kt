package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class PurchaseSession(
    @Json(name = "stripe_checkout_url") val stripeCheckoutUrl: String? = null,
    @Json(name = "session_id") val sessionId: String? = null
)
