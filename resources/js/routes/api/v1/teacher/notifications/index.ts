import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::index
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:11
 * @route '/api/v1/teacher/notifications'
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
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::send
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:16
 * @route '/api/v1/teacher/notifications/send'
 */
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/notifications/send',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::send
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:16
 * @route '/api/v1/teacher/notifications/send'
 */
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::send
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:16
 * @route '/api/v1/teacher/notifications/send'
 */
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::send
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:16
 * @route '/api/v1/teacher/notifications/send'
 */
    const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: send.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\NotificationController::send
 * @see app/Http/Controllers/Api/V1/Teacher/NotificationController.php:16
 * @route '/api/v1/teacher/notifications/send'
 */
        sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: send.url(options),
            method: 'post',
        })
    
    send.form = sendForm
const notifications = {
    index: Object.assign(index, index),
send: Object.assign(send, send),
}

export default notifications