import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::store
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:12
* @route '/api/v1/student/courses/{course}/enroll'
*/
export const store = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/student/courses/{course}/enroll',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::store
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:12
* @route '/api/v1/student/courses/{course}/enroll'
*/
store.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::store
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:12
* @route '/api/v1/student/courses/{course}/enroll'
*/
store.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::store
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:12
* @route '/api/v1/student/courses/{course}/enroll'
*/
const storeForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::store
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:12
* @route '/api/v1/student/courses/{course}/enroll'
*/
storeForm.post = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:27
* @route '/api/v1/student/enrollments/{enrollment}'
*/
export const destroy = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/student/enrollments/{enrollment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:27
* @route '/api/v1/student/enrollments/{enrollment}'
*/
destroy.url = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enrollment: args }
    }

    if (Array.isArray(args)) {
        args = {
            enrollment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        enrollment: args.enrollment,
    }

    return destroy.definition.url
            .replace('{enrollment}', parsedArgs.enrollment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:27
* @route '/api/v1/student/enrollments/{enrollment}'
*/
destroy.delete = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:27
* @route '/api/v1/student/enrollments/{enrollment}'
*/
const destroyForm = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Api/V1/Student/EnrollmentController.php:27
* @route '/api/v1/student/enrollments/{enrollment}'
*/
destroyForm.delete = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const EnrollmentController = { store, destroy }

export default EnrollmentController