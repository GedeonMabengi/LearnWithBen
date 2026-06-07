import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
const handleWebhook28dac61edbfa616fd2aeb048d9317850 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook28dac61edbfa616fd2aeb048d9317850.url(options),
    method: 'post',
})

handleWebhook28dac61edbfa616fd2aeb048d9317850.definition = {
    methods: ["post"],
    url: '/api/v1/webhooks/stripe',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
handleWebhook28dac61edbfa616fd2aeb048d9317850.url = (options?: RouteQueryOptions) => {
    return handleWebhook28dac61edbfa616fd2aeb048d9317850.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
handleWebhook28dac61edbfa616fd2aeb048d9317850.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook28dac61edbfa616fd2aeb048d9317850.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
    const handleWebhook28dac61edbfa616fd2aeb048d9317850Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: handleWebhook28dac61edbfa616fd2aeb048d9317850.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
        handleWebhook28dac61edbfa616fd2aeb048d9317850Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: handleWebhook28dac61edbfa616fd2aeb048d9317850.url(options),
            method: 'post',
        })
    
    handleWebhook28dac61edbfa616fd2aeb048d9317850.form = handleWebhook28dac61edbfa616fd2aeb048d9317850Form
    /**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/webhooks/stripe'
 */
const handleWebhook10d7cc18815c3fd03e906610c643475f = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook10d7cc18815c3fd03e906610c643475f.url(options),
    method: 'post',
})

handleWebhook10d7cc18815c3fd03e906610c643475f.definition = {
    methods: ["post"],
    url: '/webhooks/stripe',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/webhooks/stripe'
 */
handleWebhook10d7cc18815c3fd03e906610c643475f.url = (options?: RouteQueryOptions) => {
    return handleWebhook10d7cc18815c3fd03e906610c643475f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/webhooks/stripe'
 */
handleWebhook10d7cc18815c3fd03e906610c643475f.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook10d7cc18815c3fd03e906610c643475f.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/webhooks/stripe'
 */
    const handleWebhook10d7cc18815c3fd03e906610c643475fForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: handleWebhook10d7cc18815c3fd03e906610c643475f.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\StripeController::handleWebhook
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/webhooks/stripe'
 */
        handleWebhook10d7cc18815c3fd03e906610c643475fForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: handleWebhook10d7cc18815c3fd03e906610c643475f.url(options),
            method: 'post',
        })
    
    handleWebhook10d7cc18815c3fd03e906610c643475f.form = handleWebhook10d7cc18815c3fd03e906610c643475fForm

/**
* Multiple routes resolve to \App\Http\Controllers\Webhook\StripeController::handleWebhook, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `handleWebhook['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const handleWebhook = {
    '/api/v1/webhooks/stripe': handleWebhook28dac61edbfa616fd2aeb048d9317850,
    '/webhooks/stripe': handleWebhook10d7cc18815c3fd03e906610c643475f,
}

const StripeController = { handleWebhook }

export default StripeController