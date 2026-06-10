package com.engteacher.app.model

object FirestoreStringList {
    fun normalize(value: Any?): List<String> {
        if (value == null) return emptyList()

        val raw = value as? List<*> ?: return emptyList()
        return raw.mapNotNull { it as? String }.filter { it.isNotBlank() }
    }
}
