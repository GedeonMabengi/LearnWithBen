import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::checkout
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:17
 * @route '/student/token-types/{tokenType}/purchase'
 */
export const checkout = (args: { tokenType: number | { id: number } } | [tokenType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkout.url(args, options),
    method: 'post',
})

checkout.definition = {
    methods: ["post"],
    url: '/student/token-types/{tokenType}/purchase',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::checkout
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:17
 * @route '/student/token-types/{tokenType}/purchase'
 */
checkout.url = (args: { tokenType: number | { id: number } } | [tokenType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tokenType: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { tokenType: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    tokenType: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tokenType: typeof args.tokenType === 'object'
                ? args.tokenType.id
                : args.tokenType,
                }

    return checkout.definition.url
            .replace('{tokenType}', parsedArgs.tokenType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::checkout
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:17
 * @route '/student/token-types/{tokenType}/purchase'
 */
checkout.post = (args: { tokenType: number | { id: number } } | [tokenType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkout.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::checkout
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:17
 * @route '/student/token-types/{tokenType}/purchase'
 */
    const checkoutForm = (args: { tokenType: number | { id: number } } | [tokenType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: checkout.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::checkout
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:17
 * @route '/student/token-types/{tokenType}/purchase'
 */
        checkoutForm.post = (args: { tokenType: number | { id: number } } | [tokenType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: checkout.url(args, options),
            method: 'post',
        })
    
    checkout.form = checkoutForm
/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
export const success = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(options),
    method: 'get',
})

success.definition = {
    methods: ["get","head"],
    url: '/student/purchase/success',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
success.url = (options?: RouteQueryOptions) => {
    return success.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
success.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
success.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: success.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
    const successForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: success.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
        successForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: success.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::success
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:24
 * @route '/student/purchase/success'
 */
        successForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: success.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    success.form = successForm
/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
export const cancel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(options),
    method: 'get',
})

cancel.definition = {
    methods: ["get","head"],
    url: '/student/purchase/cancel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
cancel.url = (options?: RouteQueryOptions) => {
    return cancel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
cancel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
cancel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cancel.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
    const cancelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cancel.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
        cancelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancel.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Student\PurchaseController::cancel
 * @see app/Http/Controllers/Web/Student/PurchaseController.php:31
 * @route '/student/purchase/cancel'
 */
        cancelForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancel.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cancel.form = cancelForm
const purchase = {
    checkout: Object.assign(checkout, checkout),
success: Object.assign(success, success),
cancel: Object.assign(cancel, cancel),
}

export default purchase