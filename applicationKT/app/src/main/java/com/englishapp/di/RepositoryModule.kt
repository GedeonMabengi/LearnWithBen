package com.englishapp.di

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
import com.englishapp.data.repository.AuthRepository
import com.englishapp.data.repository.CourseRepository
import com.englishapp.data.repository.EnrollmentRepository
import com.englishapp.data.repository.FcmTokenRepository
import com.englishapp.data.repository.LiveKitRepository
import com.englishapp.data.repository.NotificationRepository
import com.englishapp.data.repository.ProfileRepository
import com.englishapp.data.repository.PurchaseRepository
import com.englishapp.data.repository.RecordingRepository
import com.englishapp.data.repository.ResourceRepository
import com.englishapp.data.repository.SkillRepository
import com.englishapp.data.repository.TokenRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object RepositoryModule {

    @Provides
    @Singleton
    fun provideAuthRepository(authApi: AuthApi, prefs: SharedPreferencesManager): AuthRepository =
        AuthRepository(authApi, prefs)

    @Provides
    @Singleton
    fun provideCourseRepository(courseApi: CourseApi): CourseRepository =
        CourseRepository(courseApi)

    @Provides
    @Singleton
    fun provideEnrollmentRepository(enrollmentApi: EnrollmentApi): EnrollmentRepository =
        EnrollmentRepository(enrollmentApi)

    @Provides
    @Singleton
    fun provideTokenRepository(tokenApi: TokenApi): TokenRepository =
        TokenRepository(tokenApi)

    @Provides
    @Singleton
    fun provideResourceRepository(resourceApi: ResourceApi): ResourceRepository =
        ResourceRepository(resourceApi)

    @Provides
    @Singleton
    fun provideRecordingRepository(recordingApi: RecordingApi): RecordingRepository =
        RecordingRepository(recordingApi)

    @Provides
    @Singleton
    fun provideSkillRepository(skillApi: SkillApi): SkillRepository =
        SkillRepository(skillApi)

    @Provides
    @Singleton
    fun provideNotificationRepository(notificationApi: NotificationApi): NotificationRepository =
        NotificationRepository(notificationApi)

    @Provides
    @Singleton
    fun provideLiveKitRepository(liveKitApi: LiveKitApi): LiveKitRepository =
        LiveKitRepository(liveKitApi)

    @Provides
    @Singleton
    fun providePurchaseRepository(purchaseApi: PurchaseApi): PurchaseRepository =
        PurchaseRepository(purchaseApi)

    @Provides
    @Singleton
    fun provideProfileRepository(profileApi: ProfileApi): ProfileRepository =
        ProfileRepository(profileApi)

    @Provides
    @Singleton
    fun provideFcmTokenRepository(profileApi: ProfileApi): FcmTokenRepository =
        FcmTokenRepository(profileApi)
}
