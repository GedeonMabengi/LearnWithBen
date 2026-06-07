import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Student\NotificationController::index
 * @see app/Http/Controllers/Web/Student/NotificationController.php:11
 * @route '/student/notifications'
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
const NotificationController = { index }

export default NotificationController