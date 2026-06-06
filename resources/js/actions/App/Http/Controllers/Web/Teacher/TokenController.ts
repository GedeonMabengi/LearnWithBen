import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::generate
* @see app/Http/Controllers/Web/Teacher/TokenController.php:16
* @route '/teacher/token-types/{token_type}/generate'
*/
export const generate = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(args, options),
    method: 'post',
})

generate.definition = {
    methods: ["post"],
    url: '/teacher/token-types/{token_type}/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::generate
* @see app/Http/Controllers/Web/Teacher/TokenController.php:16
* @route '/teacher/token-types/{token_type}/generate'
*/
generate.url = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            token_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token_type: args.token_type,
    }

    return generate.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::generate
* @see app/Http/Controllers/Web/Teacher/TokenController.php:16
* @route '/teacher/token-types/{token_type}/generate'
*/
generate.post = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::generate
* @see app/Http/Controllers/Web/Teacher/TokenController.php:16
* @route '/teacher/token-types/{token_type}/generate'
*/
const generateForm = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::generate
* @see app/Http/Controllers/Web/Teacher/TokenController.php:16
* @route '/teacher/token-types/{token_type}/generate'
*/
generateForm.post = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate.url(args, options),
    method: 'post',
})

generate.form = generateForm

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
export const indexByType = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexByType.url(args, options),
    method: 'get',
})

indexByType.definition = {
    methods: ["get","head"],
    url: '/teacher/token-types/{token_type}/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
indexByType.url = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            token_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token_type: args.token_type,
    }

    return indexByType.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
indexByType.get = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexByType.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
indexByType.head = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexByType.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
const indexByTypeForm = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexByType.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
indexByTypeForm.get = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexByType.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::indexByType
* @see app/Http/Controllers/Web/Teacher/TokenController.php:33
* @route '/teacher/token-types/{token_type}/tokens'
*/
indexByTypeForm.head = (args: { token_type: string | number } | [token_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Web\Teacher\TokenController::assign
* @see app/Http/Controllers/Web/Teacher/TokenController.php:40
* @route '/teacher/tokens/{token}/assign'
*/
export const assign = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(args, options),
    method: 'post',
})

assign.definition = {
    methods: ["post"],
    url: '/teacher/tokens/{token}/assign',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::assign
* @see app/Http/Controllers/Web/Teacher/TokenController.php:40
* @route '/teacher/tokens/{token}/assign'
*/
assign.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return assign.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::assign
* @see app/Http/Controllers/Web/Teacher/TokenController.php:40
* @route '/teacher/tokens/{token}/assign'
*/
assign.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::assign
* @see app/Http/Controllers/Web/Teacher/TokenController.php:40
* @route '/teacher/tokens/{token}/assign'
*/
const assignForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assign.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::assign
* @see app/Http/Controllers/Web/Teacher/TokenController.php:40
* @route '/teacher/tokens/{token}/assign'
*/
assignForm.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assign.url(args, options),
    method: 'post',
})

assign.form = assignForm

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::revoke
* @see app/Http/Controllers/Web/Teacher/TokenController.php:49
* @route '/teacher/tokens/{token}/revoke'
*/
export const revoke = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

revoke.definition = {
    methods: ["post"],
    url: '/teacher/tokens/{token}/revoke',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::revoke
* @see app/Http/Controllers/Web/Teacher/TokenController.php:49
* @route '/teacher/tokens/{token}/revoke'
*/
revoke.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return revoke.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::revoke
* @see app/Http/Controllers/Web/Teacher/TokenController.php:49
* @route '/teacher/tokens/{token}/revoke'
*/
revoke.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: revoke.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::revoke
* @see app/Http/Controllers/Web/Teacher/TokenController.php:49
* @route '/teacher/tokens/{token}/revoke'
*/
const revokeForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::revoke
* @see app/Http/Controllers/Web/Teacher/TokenController.php:49
* @route '/teacher/tokens/{token}/revoke'
*/
revokeForm.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: revoke.url(args, options),
    method: 'post',
})

revoke.form = revokeForm

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
export const qrCode = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/teacher/tokens/{token}/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrCode.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return qrCode.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrCode.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrCode.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
const qrCodeForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrCodeForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qrCode
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrCodeForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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