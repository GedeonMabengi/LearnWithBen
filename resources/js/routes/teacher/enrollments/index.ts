import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markAttended
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:11
* @route '/teacher/enrollments/{enrollment}/mark-attended'
*/
export const markAttended = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAttended.url(args, options),
    method: 'post',
})

markAttended.definition = {
    methods: ["post"],
    url: '/teacher/enrollments/{enrollment}/mark-attended',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markAttended
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:11
* @route '/teacher/enrollments/{enrollment}/mark-attended'
*/
markAttended.url = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enrollment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { enrollment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            enrollment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        enrollment: typeof args.enrollment === 'object'
        ? args.enrollment.id
        : args.enrollment,
    }

    return markAttended.definition.url
            .replace('{enrollment}', parsedArgs.enrollment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markAttended
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:11
* @route '/teacher/enrollments/{enrollment}/mark-attended'
*/
markAttended.post = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAttended.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markAttended
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:11
* @route '/teacher/enrollments/{enrollment}/mark-attended'
*/
const markAttendedForm = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAttended.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markAttended
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:11
* @route '/teacher/enrollments/{enrollment}/mark-attended'
*/
markAttendedForm.post = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAttended.url(args, options),
    method: 'post',
})

markAttended.form = markAttendedForm

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markNoShow
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:19
* @route '/teacher/enrollments/{enrollment}/mark-no-show'
*/
export const markNoShow = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markNoShow.url(args, options),
    method: 'post',
})

markNoShow.definition = {
    methods: ["post"],
    url: '/teacher/enrollments/{enrollment}/mark-no-show',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markNoShow
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:19
* @route '/teacher/enrollments/{enrollment}/mark-no-show'
*/
markNoShow.url = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enrollment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { enrollment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            enrollment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        enrollment: typeof args.enrollment === 'object'
        ? args.enrollment.id
        : args.enrollment,
    }

    return markNoShow.definition.url
            .replace('{enrollment}', parsedArgs.enrollment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markNoShow
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:19
* @route '/teacher/enrollments/{enrollment}/mark-no-show'
*/
markNoShow.post = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markNoShow.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markNoShow
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:19
* @route '/teacher/enrollments/{enrollment}/mark-no-show'
*/
const markNoShowForm = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markNoShow.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::markNoShow
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:19
* @route '/teacher/enrollments/{enrollment}/mark-no-show'
*/
markNoShowForm.post = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markNoShow.url(args, options),
    method: 'post',
})

markNoShow.form = markNoShowForm

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:27
* @route '/teacher/enrollments/{enrollment}'
*/
export const destroy = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/teacher/enrollments/{enrollment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:27
* @route '/teacher/enrollments/{enrollment}'
*/
destroy.url = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enrollment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { enrollment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            enrollment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        enrollment: typeof args.enrollment === 'object'
        ? args.enrollment.id
        : args.enrollment,
    }

    return destroy.definition.url
            .replace('{enrollment}', parsedArgs.enrollment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:27
* @route '/teacher/enrollments/{enrollment}'
*/
destroy.delete = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:27
* @route '/teacher/enrollments/{enrollment}'
*/
const destroyForm = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Teacher/EnrollmentController.php:27
* @route '/teacher/enrollments/{enrollment}'
*/
destroyForm.delete = (args: { enrollment: number | { id: number } } | [enrollment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const enrollments = {
    markAttended: Object.assign(markAttended, markAttended),
    markNoShow: Object.assign(markNoShow, markNoShow),
    destroy: Object.assign(destroy, destroy),
}

export default enrollments