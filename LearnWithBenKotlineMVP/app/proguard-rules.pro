# ProGuard rules for EngTeacher MVP
# Add project specific ProGuard rules here

# Jitsi Meet SDK
-keep class org.jitsi.meet.sdk.** { *; }
-keep class org.webrtc.** { *; }
-dontwarn org.jitsi.meet.sdk.**
-dontwarn org.webrtc.**

# Firebase
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**

# Coroutines
-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}

# Kotlinx Serialization
-keepattributes *Annotation*, InnerClasses
-dontnote kotlinx.serialization.AnnotationsKt
