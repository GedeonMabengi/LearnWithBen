package com.englishapp.domain.usecase

import com.englishapp.data.model.Skill
import com.englishapp.data.repository.SkillRepository
import javax.inject.Inject

class GetSkillsUseCase @Inject constructor(
    private val skillRepository: SkillRepository
) {
    suspend operator fun invoke(): Result<List<Skill>> {
        return skillRepository.getSkills()
    }
}
