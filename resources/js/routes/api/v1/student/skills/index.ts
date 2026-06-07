import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/student/skills',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Student\SkillController::index
 * @see app/Http/Controllers/Api/V1/Student/SkillController.php:11
 * @route '/api/v1/student/skills'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const skills = {
    index: Object.assign(index, index),
}

export default skills