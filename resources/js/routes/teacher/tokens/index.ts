import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
export const qr = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qr.url(args, options),
    method: 'get',
})

qr.definition = {
    methods: ["get","head"],
    url: '/teacher/tokens/{token}/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qr.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return qr.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qr.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qr.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qr.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qr.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
const qrForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qr.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qr.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Teacher\TokenController::qr
* @see app/Http/Controllers/Web/Teacher/TokenController.php:57
* @route '/teacher/tokens/{token}/qr'
*/
qrForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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