package com.englishapp.util

import android.app.Activity
import com.journeyapps.barcodescanner.ScanContract
import com.journeyapps.barcodescanner.ScanOptions

/**
 * Helper to launch QR code scanner using journeyapps zxing-android-embedded.
 * Usage in Activity/Fragment:
 *    QRCodeScanner.launchScanner(this) { scannedCode -> ... }
 */
object QRCodeScanner {
    fun getScanOptions(): ScanOptions {
        return ScanOptions().apply {
            setDesiredBarcodeFormats(ScanOptions.QR_CODE)
            setPrompt("Scan a QR code")
            setOrientationLocked(true)
            setBeepEnabled(true)
        }
    }
}
