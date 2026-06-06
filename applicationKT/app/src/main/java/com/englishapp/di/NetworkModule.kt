package com.englishapp.di

import com.englishapp.BuildConfig
import com.englishapp.data.api.AuthApi
import com.englishapp.data.api.CourseApi
import com.englishapp.data.api.EnrollmentApi
import com.englishapp.data.api.LiveKitApi
import com.englishapp.data.api.NotificationApi
import com.englishapp.data.api.ProfileApi
import com.englishapp.data.api.PurchaseApi
import com.englishapp.data.api.RecordingApi
import com.englishapp.data.api.ResourceApi
import com.englishapp.data.api.SkillApi
import com.englishapp.data.api.TokenApi
import com.englishapp.data.local.SharedPreferencesManager
import com.squareup.moshi.Moshi
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory
import java.util.concurrent.TimeUnit
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {

    @Provides
    @Singleton
    fun provideMoshi(): Moshi = Moshi.Builder()
        .addLast(KotlinJsonAdapterFactory())
        .build()

    @Provides
    @Singleton
    fun provideOkHttpClient(sharedPreferencesManager: SharedPreferencesManager): OkHttpClient {
        val loggingInterceptor = HttpLoggingInterceptor().apply {
            level = if (BuildConfig.DEBUG) HttpLoggingInterceptor.Level.BODY else HttpLoggingInterceptor.Level.NONE
        }

        val authInterceptor = Interceptor { chain ->
            val requestBuilder = chain.request().newBuilder()
            val token = sharedPreferencesManager.getAccessToken()
            if (!token.isNullOrEmpty()) {
                requestBuilder.addHeader("Authorization", "Bearer $token")
            }
            requestBuilder.addHeader("Accept", "application/json")
            chain.proceed(requestBuilder.build())
        }

        return OkHttpClient.Builder()
            .addInterceptor(authInterceptor)
            .addInterceptor(loggingInterceptor)
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .writeTimeout(30, TimeUnit.SECONDS)
            .build()
    }

    @Provides
    @Singleton
    fun provideRetrofit(okHttpClient: OkHttpClient, moshi: Moshi): Retrofit =
        Retrofit.Builder()
            .baseUrl(BuildConfig.API_BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(MoshiConverterFactory.create(moshi))
            .build()

    @Provides
    @Singleton
    fun provideAuthApi(retrofit: Retrofit): AuthApi = retrofit.create(AuthApi::class.java)

    @Provides
    @Singleton
    fun provideCourseApi(retrofit: Retrofit): CourseApi = retrofit.create(CourseApi::class.java)

    @Provides
    @Singleton
    fun provideEnrollmentApi(retrofit: Retrofit): EnrollmentApi = retrofit.create(EnrollmentApi::class.java)

    @Provides
    @Singleton
    fun provideTokenApi(retrofit: Retrofit): TokenApi = retrofit.create(TokenApi::class.java)

    @Provides
    @Singleton
    fun provideResourceApi(retrofit: Retrofit): ResourceApi = retrofit.create(ResourceApi::class.java)

    @Provides
    @Singleton
    fun provideRecordingApi(retrofit: Retrofit): RecordingApi = retrofit.create(RecordingApi::class.java)

    @Provides
    @Singleton
    fun provideSkillApi(retrofit: Retrofit): SkillApi = retrofit.create(SkillApi::class.java)

    @Provides
    @Singleton
    fun provideNotificationApi(retrofit: Retrofit): NotificationApi = retrofit.create(NotificationApi::class.java)

    @Provides
    @Singleton
    fun provideLiveKitApi(retrofit: Retrofit): LiveKitApi = retrofit.create(LiveKitApi::class.java)

    @Provides
    @Singleton
    fun providePurchaseApi(retrofit: Retrofit): PurchaseApi = retrofit.create(PurchaseApi::class.java)

    @Provides
    @Singleton
    fun provideProfileApi(retrofit: Retrofit): ProfileApi = retrofit.create(ProfileApi::class.java)
}
