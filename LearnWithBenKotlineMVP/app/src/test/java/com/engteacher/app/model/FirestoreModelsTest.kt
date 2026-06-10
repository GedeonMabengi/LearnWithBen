package com.engteacher.app.model

import org.junit.Assert.assertEquals
import org.junit.Test

class FirestoreModelsTest {

    @Test
    fun normalizeStringList_handlesFirestoreValuesSafely() {
        val normalized = FirestoreStringList.normalize(listOf("alpha", 1, "beta"))

        assertEquals(listOf("alpha", "beta"), normalized)
    }

    @Test
    fun normalizeStringList_returnsEmptyListForNullValues() {
        assertEquals(emptyList<String>(), FirestoreStringList.normalize(null))
    }
}
