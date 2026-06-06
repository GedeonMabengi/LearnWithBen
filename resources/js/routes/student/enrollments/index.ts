import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Student/EnrollmentController.php:55
* @route '/student/enrollments/{enrollment}'
*/
export const destroy = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/student/enrollments/{enrollment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Web\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Student/EnrollmentController.php:55
* @route '/student/enrollments/{enrollment}'
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
* @see \App\Http\Controllers\Web\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Student/EnrollmentController.php:55
* @route '/student/enrollments/{enrollment}'
*/
destroy.delete = (args: { enrollment: string | number } | [enrollment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Web\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Student/EnrollmentController.php:55
* @route '/student/enrollments/{enrollment}'
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
* @see \App\Http\Controllers\Web\Student\EnrollmentController::destroy
* @see app/Http/Controllers/Web/Student/EnrollmentController.php:55
* @route '/student/enrollments/{enrollment}'
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

const enrollments = {
    destroy: Object.assign(destroy, destroy),
}

export default enrollments