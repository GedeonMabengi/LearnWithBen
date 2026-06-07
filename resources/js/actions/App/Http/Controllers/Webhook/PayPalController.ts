import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
const handleWebhook1f6e005c2fe9327c53dadc659eb6da6c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.url(options),
    method: 'post',
})

handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.definition = {
    methods: ["post"],
    url: '/api/v1/webhooks/paypal',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.url = (options?: RouteQueryOptions) => {
    return handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
    const handleWebhook1f6e005c2fe9327c53dadc659eb6da6cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
        handleWebhook1f6e005c2fe9327c53dadc659eb6da6cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.url(options),
            method: 'post',
        })
    
    handleWebhook1f6e005c2fe9327c53dadc659eb6da6c.form = handleWebhook1f6e005c2fe9327c53dadc659eb6da6cForm
    /**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/webhooks/paypal'
 */
const handleWebhook6284cd43af8bae1eb7647c8ed91ee31b = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.url(options),
    method: 'post',
})

handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.definition = {
    methods: ["post"],
    url: '/webhooks/paypal',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/webhooks/paypal'
 */
handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.url = (options?: RouteQueryOptions) => {
    return handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/webhooks/paypal'
 */
handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/webhooks/paypal'
 */
    const handleWebhook6284cd43af8bae1eb7647c8ed91ee31bForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\PayPalController::handleWebhook
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/webhooks/paypal'
 */
        handleWebhook6284cd43af8bae1eb7647c8ed91ee31bForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.url(options),
            method: 'post',
        })
    
    handleWebhook6284cd43af8bae1eb7647c8ed91ee31b.form = handleWebhook6284cd43af8bae1eb7647c8ed91ee31bForm

/**
* Multiple routes resolve to \App\Http\Controllers\Webhook\PayPalController::handleWebhook, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `handleWebhook['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const handleWebhook = {
    '/api/v1/webhooks/paypal': handleWebhook1f6e005c2fe9327c53dadc659eb6da6c,
    '/webhooks/paypal': handleWebhook6284cd43af8bae1eb7647c8ed91ee31b,
}

const PayPalController = { handleWebhook }

export default PayPalController