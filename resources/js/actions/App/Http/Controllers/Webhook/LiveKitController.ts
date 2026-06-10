import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/api/v1/webhooks/livekit'
*/
const handleWebhook8d86f45829cf847e40a1db316c114fb2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook8d86f45829cf847e40a1db316c114fb2.url(options),
    method: 'post',
})

handleWebhook8d86f45829cf847e40a1db316c114fb2.definition = {
    methods: ["post"],
    url: '/api/v1/webhooks/livekit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/api/v1/webhooks/livekit'
*/
handleWebhook8d86f45829cf847e40a1db316c114fb2.url = (options?: RouteQueryOptions) => {
    return handleWebhook8d86f45829cf847e40a1db316c114fb2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/api/v1/webhooks/livekit'
*/
handleWebhook8d86f45829cf847e40a1db316c114fb2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhook8d86f45829cf847e40a1db316c114fb2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/api/v1/webhooks/livekit'
*/
const handleWebhook8d86f45829cf847e40a1db316c114fb2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleWebhook8d86f45829cf847e40a1db316c114fb2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/api/v1/webhooks/livekit'
*/
handleWebhook8d86f45829cf847e40a1db316c114fb2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleWebhook8d86f45829cf847e40a1db316c114fb2.url(options),
    method: 'post',
})

handleWebhook8d86f45829cf847e40a1db316c114fb2.form = handleWebhook8d86f45829cf847e40a1db316c114fb2Form
/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/webhooks/livekit'
*/
const handleWebhookec20fdc87fe334baf1d3b31bf8c0def9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.url(options),
    method: 'post',
})

handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.definition = {
    methods: ["post"],
    url: '/webhooks/livekit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/webhooks/livekit'
*/
handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.url = (options?: RouteQueryOptions) => {
    return handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/webhooks/livekit'
*/
handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/webhooks/livekit'
*/
const handleWebhookec20fdc87fe334baf1d3b31bf8c0def9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Webhook\LiveKitController::handleWebhook
* @see app/Http/Controllers/Webhook/LiveKitController.php:11
* @route '/webhooks/livekit'
*/
handleWebhookec20fdc87fe334baf1d3b31bf8c0def9Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.url(options),
    method: 'post',
})

handleWebhookec20fdc87fe334baf1d3b31bf8c0def9.form = handleWebhookec20fdc87fe334baf1d3b31bf8c0def9Form

/**
* Multiple routes resolve to \App\Http\Controllers\Webhook\LiveKitController::handleWebhook, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `handleWebhook['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const handleWebhook = {
    '/api/v1/webhooks/livekit': handleWebhook8d86f45829cf847e40a1db316c114fb2,
    '/webhooks/livekit': handleWebhookec20fdc87fe334baf1d3b31bf8c0def9,
}

const LiveKitController = { handleWebhook }

export default LiveKitController