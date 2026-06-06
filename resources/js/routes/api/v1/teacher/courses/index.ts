import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::index
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:13
* @route '/api/v1/teacher/courses'
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
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::store
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:18
* @route '/api/v1/teacher/courses'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/courses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::store
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:18
* @route '/api/v1/teacher/courses'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::store
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:18
* @route '/api/v1/teacher/courses'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::store
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:18
* @route '/api/v1/teacher/courses'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::store
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:18
* @route '/api/v1/teacher/courses'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
export const show = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/courses/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
show.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: args.course,
    }

    return show.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
show.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
show.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
const showForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
showForm.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::show
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:37
* @route '/api/v1/teacher/courses/{course}'
*/
showForm.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
export const update = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/teacher/courses/{course}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
update.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: args.course,
    }

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
update.put = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
update.patch = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
const updateForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
updateForm.put = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::update
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:42
* @route '/api/v1/teacher/courses/{course}'
*/
updateForm.patch = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:49
* @route '/api/v1/teacher/courses/{course}'
*/
export const destroy = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/teacher/courses/{course}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:49
* @route '/api/v1/teacher/courses/{course}'
*/
destroy.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: args.course,
    }

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:49
* @route '/api/v1/teacher/courses/{course}'
*/
destroy.delete = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:49
* @route '/api/v1/teacher/courses/{course}'
*/
const destroyForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:49
* @route '/api/v1/teacher/courses/{course}'
*/
destroyForm.delete = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::invite
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:56
* @route '/api/v1/teacher/courses/{course}/invite'
*/
export const invite = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: invite.url(args, options),
    method: 'post',
})

invite.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/courses/{course}/invite',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::invite
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:56
* @route '/api/v1/teacher/courses/{course}/invite'
*/
invite.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: args.course,
    }

    return invite.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::invite
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:56
* @route '/api/v1/teacher/courses/{course}/invite'
*/
invite.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: invite.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::invite
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:56
* @route '/api/v1/teacher/courses/{course}/invite'
*/
const inviteForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: invite.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::invite
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:56
* @route '/api/v1/teacher/courses/{course}/invite'
*/
inviteForm.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: invite.url(args, options),
    method: 'post',
})

invite.form = inviteForm

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
export const participants = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: participants.url(args, options),
    method: 'get',
})

participants.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/courses/{course}/participants',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
participants.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: args.course,
    }

    return participants.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
participants.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: participants.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
participants.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: participants.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
const participantsForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: participants.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
participantsForm.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: participants.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\CourseController::participants
* @see app/Http/Controllers/Api/V1/Teacher/CourseController.php:66
* @route '/api/v1/teacher/courses/{course}/participants'
*/
participantsForm.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: participants.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

participants.form = participantsForm

const courses = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    invite: Object.assign(invite, invite),
    participants: Object.assign(participants, participants),
}

export default courses