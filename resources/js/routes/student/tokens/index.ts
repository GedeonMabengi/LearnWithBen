import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/tokens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Student\TokenController::index
 * @see app/Http/Controllers/Web/Student/TokenController.php:16
 * @route '/student/tokens'
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
* @see \App\Http\Controllers\Web\Student\TokenController::redeem
 * @see app/Http/Controllers/Web/Student/TokenController.php:23
 * @route '/student/tokens/redeem'
 */
export const redeem = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: redeem.url(options),
    method: 'post',
})

redeem.definition = {
    methods: ["post"],
    url: '/student/tokens/redeem',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Student\TokenController::redeem
 * @see app/Http/Controllers/Web/Student/TokenController.php:23
 * @route '/student/tokens/redeem'
 */
redeem.url = (options?: RouteQueryOptions) => {
    return redeem.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\TokenController::redeem
 * @see app/Http/Controllers/Web/Student/TokenController.php:23
 * @route '/student/tokens/redeem'
 */
redeem.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: redeem.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Student\TokenController::redeem
 * @see app/Http/Controllers/Web/Student/TokenController.php:23
 * @route '/student/tokens/redeem'
 */
    const redeemForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: redeem.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Student\TokenController::redeem
 * @see app/Http/Controllers/Web/Student/TokenController.php:23
 * @route '/student/tokens/redeem'
 */
        redeemForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: redeem.url(options),
            method: 'post',
        })
    
    redeem.form = redeemForm
/**
* @see \App\Http\Controllers\Web\Student\TokenController::transfer
 * @see app/Http/Controllers/Web/Student/TokenController.php:38
 * @route '/student/tokens/{token}/transfer'
 */
export const transfer = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(args, options),
    method: 'post',
})

transfer.definition = {
    methods: ["post"],
    url: '/student/tokens/{token}/transfer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Student\TokenController::transfer
 * @see app/Http/Controllers/Web/Student/TokenController.php:38
 * @route '/student/tokens/{token}/transfer'
 */
transfer.url = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return transfer.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\TokenController::transfer
 * @see app/Http/Controllers/Web/Student/TokenController.php:38
 * @route '/student/tokens/{token}/transfer'
 */
transfer.post = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Student\TokenController::transfer
 * @see app/Http/Controllers/Web/Student/TokenController.php:38
 * @route '/student/tokens/{token}/transfer'
 */
    const transferForm = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: transfer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Student\TokenController::transfer
 * @see app/Http/Controllers/Web/Student/TokenController.php:38
 * @route '/student/tokens/{token}/transfer'
 */
        transferForm.post = (args: { token: number | { id: number } } | [token: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: transfer.url(args, options),
            method: 'post',
        })
    
    transfer.form = transferForm
/**
* @see \App\Http\Controllers\Web\Student\TokenController::claim
 * @see app/Http/Controllers/Web/Student/TokenController.php:63
 * @route '/student/tokens/claim'
 */
export const claim = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(options),
    method: 'post',
})

claim.definition = {
    methods: ["post"],
    url: '/student/tokens/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Student\TokenController::claim
 * @see app/Http/Controllers/Web/Student/TokenController.php:63
 * @route '/student/tokens/claim'
 */
claim.url = (options?: RouteQueryOptions) => {
    return claim.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\TokenController::claim
 * @see app/Http/Controllers/Web/Student/TokenController.php:63
 * @route '/student/tokens/claim'
 */
claim.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Student\TokenController::claim
 * @see app/Http/Controllers/Web/Student/TokenController.php:63
 * @route '/student/tokens/claim'
 */
    const claimForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: claim.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Student\TokenController::claim
 * @see app/Http/Controllers/Web/Student/TokenController.php:63
 * @route '/student/tokens/claim'
 */
        claimForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: claim.url(options),
            method: 'post',
        })
    
    claim.form = claimForm
const tokens = {
    index: Object.assign(index, index),
redeem: Object.assign(redeem, redeem),
transfer: Object.assign(transfer, transfer),
claim: Object.assign(claim, claim),
}

export default tokens