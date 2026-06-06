package com.englishapp.data.model

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class LiveKitTokenResponse(
    @Json(name = "token") val token: String,
    @Json(name = "url") val url: String,
    @Json(name = "room") val room: String
)
