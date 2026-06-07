import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/skills',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::index
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:13
 * @route '/api/v1/teacher/skills'
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
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::store
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:18
 * @route '/api/v1/teacher/skills'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/skills',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::store
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:18
 * @route '/api/v1/teacher/skills'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::store
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:18
 * @route '/api/v1/teacher/skills'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::store
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:18
 * @route '/api/v1/teacher/skills'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::store
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:18
 * @route '/api/v1/teacher/skills'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
export const show = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/skills/{skill}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
show.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { skill: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    skill: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        skill: typeof args.skill === 'object'
                ? args.skill.id
                : args.skill,
                }

    return show.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
show.get = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
show.head = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
    const showForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
        showForm.get = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::show
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:26
 * @route '/api/v1/teacher/skills/{skill}'
 */
        showForm.head = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
export const update = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/teacher/skills/{skill}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
update.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { skill: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    skill: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        skill: typeof args.skill === 'object'
                ? args.skill.id
                : args.skill,
                }

    return update.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
update.put = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
update.patch = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
    const updateForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
        updateForm.put = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::update
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:31
 * @route '/api/v1/teacher/skills/{skill}'
 */
        updateForm.patch = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::destroy
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:38
 * @route '/api/v1/teacher/skills/{skill}'
 */
export const destroy = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/teacher/skills/{skill}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::destroy
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:38
 * @route '/api/v1/teacher/skills/{skill}'
 */
destroy.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { skill: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    skill: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        skill: typeof args.skill === 'object'
                ? args.skill.id
                : args.skill,
                }

    return destroy.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::destroy
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:38
 * @route '/api/v1/teacher/skills/{skill}'
 */
destroy.delete = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::destroy
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:38
 * @route '/api/v1/teacher/skills/{skill}'
 */
    const destroyForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::destroy
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:38
 * @route '/api/v1/teacher/skills/{skill}'
 */
        destroyForm.delete = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::validateStudent
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:45
 * @route '/api/v1/teacher/skills/{skill}/validate/{student}'
 */
export const validateStudent = (args: { skill: number | { id: number }, student: number | { id: number } } | [skill: number | { id: number }, student: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validateStudent.url(args, options),
    method: 'post',
})

validateStudent.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/skills/{skill}/validate/{student}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::validateStudent
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:45
 * @route '/api/v1/teacher/skills/{skill}/validate/{student}'
 */
validateStudent.url = (args: { skill: number | { id: number }, student: number | { id: number } } | [skill: number | { id: number }, student: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    skill: args[0],
                    student: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        skill: typeof args.skill === 'object'
                ? args.skill.id
                : args.skill,
                                student: typeof args.student === 'object'
                ? args.student.id
                : args.student,
                }

    return validateStudent.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::validateStudent
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:45
 * @route '/api/v1/teacher/skills/{skill}/validate/{student}'
 */
validateStudent.post = (args: { skill: number | { id: number }, student: number | { id: number } } | [skill: number | { id: number }, student: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: validateStudent.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::validateStudent
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:45
 * @route '/api/v1/teacher/skills/{skill}/validate/{student}'
 */
    const validateStudentForm = (args: { skill: number | { id: number }, student: number | { id: number } } | [skill: number | { id: number }, student: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: validateStudent.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\SkillController::validateStudent
 * @see app/Http/Controllers/Api/V1/Teacher/SkillController.php:45
 * @route '/api/v1/teacher/skills/{skill}/validate/{student}'
 */
        validateStudentForm.post = (args: { skill: number | { id: number }, student: number | { id: number } } | [skill: number | { id: number }, student: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: validateStudent.url(args, options),
            method: 'post',
        })
    
    validateStudent.form = validateStudentForm
const SkillController = { index, store, show, update, destroy, validateStudent }

export default SkillController