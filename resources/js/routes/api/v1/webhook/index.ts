import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Webhook\StripeController::stripe
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
export const stripe = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stripe.url(options),
    method: 'post',
})

stripe.definition = {
    methods: ["post"],
    url: '/api/v1/webhooks/stripe',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\StripeController::stripe
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
stripe.url = (options?: RouteQueryOptions) => {
    return stripe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\StripeController::stripe
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
stripe.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stripe.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\StripeController::stripe
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
    const stripeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: stripe.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\StripeController::stripe
 * @see app/Http/Controllers/Webhook/StripeController.php:15
 * @route '/api/v1/webhooks/stripe'
 */
        stripeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: stripe.url(options),
            method: 'post',
        })
    
    stripe.form = stripeForm
/**
* @see \App\Http\Controllers\Webhook\PayPalController::paypal
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
export const paypal = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paypal.url(options),
    method: 'post',
})

paypal.definition = {
    methods: ["post"],
    url: '/api/v1/webhooks/paypal',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\PayPalController::paypal
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
paypal.url = (options?: RouteQueryOptions) => {
    return paypal.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\PayPalController::paypal
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
paypal.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paypal.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\PayPalController::paypal
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
    const paypalForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: paypal.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\PayPalController::paypal
 * @see app/Http/Controllers/Webhook/PayPalController.php:12
 * @route '/api/v1/webhooks/paypal'
 */
        paypalForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: paypal.url(options),
            method: 'post',
        })
    
    paypal.form = paypalForm
/**
* @see \App\Http\Controllers\Webhook\LiveKitController::livekit
 * @see app/Http/Controllers/Webhook/LiveKitController.php:11
 * @route '/api/v1/webhooks/livekit'
 */
export const livekit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: livekit.url(options),
    method: 'post',
})

livekit.definition = {
    methods: ["post"],
    url: '/api/v1/webhooks/livekit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::livekit
 * @see app/Http/Controllers/Webhook/LiveKitController.php:11
 * @route '/api/v1/webhooks/livekit'
 */
livekit.url = (options?: RouteQueryOptions) => {
    return livekit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::livekit
 * @see app/Http/Controllers/Webhook/LiveKitController.php:11
 * @route '/api/v1/webhooks/livekit'
 */
livekit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: livekit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Webhook\LiveKitController::livekit
 * @see app/Http/Controllers/Webhook/LiveKitController.php:11
 * @route '/api/v1/webhooks/livekit'
 */
    const livekitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: livekit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Webhook\LiveKitController::livekit
 * @see app/Http/Controllers/Webhook/LiveKitController.php:11
 * @route '/api/v1/webhooks/livekit'
 */
        livekitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: livekit.url(options),
            method: 'post',
        })
    
    livekit.form = livekitForm
const webhook = {
    stripe: Object.assign(stripe, stripe),
paypal: Object.assign(paypal, paypal),
livekit: Object.assign(livekit, livekit),
}

export default webhook