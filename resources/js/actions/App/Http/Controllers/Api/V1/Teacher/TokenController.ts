import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::generate
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:14
 * @route '/api/v1/teacher/token-types/{token_type}/generate'
 */
export const generate = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(args, options),
    method: 'post',
})

generate.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/token-types/{token_type}/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::generate
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:14
 * @route '/api/v1/teacher/token-types/{token_type}/generate'
 */
generate.url = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token_type: typeof args.token_type === 'object'
                ? args.token_type.id
                : args.token_type,
                }

    return generate.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::generate
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:14
 * @route '/api/v1/teacher/token-types/{token_type}/generate'
 */
generate.post = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::generate
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:14
 * @route '/api/v1/teacher/token-types/{token_type}/generate'
 */
    const generateForm = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: generate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::generate
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:14
 * @route '/api/v1/teacher/token-types/{token_type}/generate'
 */
        generateForm.post = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: generate.url(args, options),
            method: 'post',
        })
    
    generate.form = generateForm
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
export const indexByType = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexByType.url(args, options),
    method: 'get',
})

indexByType.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/token-types/{token_type}/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
indexByType.url = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token_type: typeof args.token_type === 'object'
                ? args.token_type.id
                : args.token_type,
                }

    return indexByType.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
indexByType.get = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexByType.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
indexByType.head = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexByType.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
    const indexByTypeForm = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexByType.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
        indexByTypeForm.get = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexByType.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::indexByType
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:32
 * @route '/api/v1/teacher/token-types/{token_type}/tokens'
 */
        indexByTypeForm.head = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexByType.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexByType.form = indexByTypeForm
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
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
export const qrCode = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/tokens/{token}/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
qrCode.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return qrCode.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
qrCode.get = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
qrCode.head = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
    const qrCodeForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: qrCode.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
        qrCodeForm.get = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: qrCode.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\V1\Teacher\TokenController::qrCode
 * @see app/Http/Controllers/Api/V1/Teacher/TokenController.php:54
 * @route '/api/v1/teacher/tokens/{token}/qr'
 */
        qrCodeForm.head = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: qrCode.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    qrCode.form = qrCodeForm
const TokenController = { generate, indexByType, assign, revoke, qrCode }

export default TokenController