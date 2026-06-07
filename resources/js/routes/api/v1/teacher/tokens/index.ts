import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::assign
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:37
 * @route '/api/v1/teacher/tokens/{token}/assign'
 */
export const assign = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(args, options),
    method: 'post',
})

assign.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/tokens/{token}/assign',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::assign
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:37
 * @route '/api/v1/teacher/tokens/{token}/assign'
 */
assign.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token: typeof args.token === 'object'
                ? args.token.id
                : args.token,
                }

    return assign.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::assign
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:37
 * @route '/api/v1/teacher/tokens/{token}/assign'
 */
assign.post = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::assign
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:37
 * @route '/api/v1/teacher/tokens/{token}/assign'
 */
    const assignForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: assign.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::assign
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:37
 * @route '/api/v1/teacher/tokens/{token}/assign'
 */
        assignForm.post = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: assign.url(args, options),
            method: 'post',
        })
    
    assign.form = assignForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::revoke
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:46
 * @route '/api/v1/teacher/tokens/{token}/revoke'
 */
export const revoke = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

revoke.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/tokens/{token}/revoke',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::revoke
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:46
 * @route '/api/v1/teacher/tokens/{token}/revoke'
 */
revoke.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token: typeof args.token === 'object'
                ? args.token.id
                : args.token,
                }

    return revoke.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::revoke
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:46
 * @route '/api/v1/teacher/tokens/{token}/revoke'
 */
revoke.post = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::revoke
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:46
 * @route '/api/v1/teacher/tokens/{token}/revoke'
 */
    const revokeForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: revoke.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::revoke
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:46
 * @route '/api/v1/teacher/tokens/{token}/revoke'
 */
        revokeForm.post = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: revoke.url(args, options),
            method: 'post',
        })
    
    revoke.form = revokeForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
export const qr = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qr.url(args, options),
    method: 'get',
})

qr.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/tokens/{token}/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
qr.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token: typeof args.token === 'object'
                ? args.token.id
                : args.token,
                }

    return qr.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
qr.get = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qr.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
qr.head = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qr.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
    const qrForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: qr.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
        qrForm.get = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: qr.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qr
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
        qrForm.head = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: qr.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    qr.form = qrForm
const tokens = {
    assign: Object.assign(assign, assign),
revoke: Object.assign(revoke, revoke),
qr: Object.assign(qr, qr),
}

export default tokens