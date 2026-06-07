-keep class com.englishapp.data.model.** { *; }
-keep class com.squareup.moshi.** { *; }
-keepclasseswithmembers class * {
    @com.squareup.moshi.* <fields>;
}

-dontwarn javax.annotation.**
-dontwarn kotlin.Metadata
