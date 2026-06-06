package com.englishapp.data.api

import com.englishapp.data.model.Skill
import retrofit2.Response
import retrofit2.http.GET

interface SkillApi {

    @GET("student/skills")
    suspend fun getSkills(): Response<List<Skill>>
}
