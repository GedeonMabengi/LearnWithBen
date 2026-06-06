package com.englishapp.domain.usecase

import com.englishapp.data.model.ResourceModel
import com.englishapp.data.repository.ResourceRepository
import javax.inject.Inject

class GetResourcesUseCase @Inject constructor(
    private val resourceRepository: ResourceRepository
) {
    suspend operator fun invoke(): Result<List<ResourceModel>> {
        return resourceRepository.getResources()
    }
}
