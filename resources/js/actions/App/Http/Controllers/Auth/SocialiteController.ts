import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
export const googleRedirect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleRedirect.url(options),
    method: 'get',
})

googleRedirect.definition = {
    methods: ["get","head"],
    url: '/auth/google/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
googleRedirect.url = (options?: RouteQueryOptions) => {
    return googleRedirect.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
googleRedirect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleRedirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
googleRedirect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: googleRedirect.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
const googleRedirectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleRedirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
googleRedirectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleRedirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:19
* @route '/auth/google/redirect'
*/
googleRedirectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleRedirect.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

googleRedirect.form = googleRedirectForm

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
export const googleCallback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleCallback.url(options),
    method: 'get',
})

googleCallback.definition = {
    methods: ["get","head"],
    url: '/auth/google/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
googleCallback.url = (options?: RouteQueryOptions) => {
    return googleCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
googleCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleCallback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
googleCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: googleCallback.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
const googleCallbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCallback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
googleCallbackForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCallback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::googleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:27
* @route '/auth/google/callback'
*/
googleCallbackForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCallback.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

googleCallback.form = googleCallbackForm

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
export const appleRedirect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appleRedirect.url(options),
    method: 'get',
})

appleRedirect.definition = {
    methods: ["get","head"],
    url: '/auth/apple/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
appleRedirect.url = (options?: RouteQueryOptions) => {
    return appleRedirect.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
appleRedirect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appleRedirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
appleRedirect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appleRedirect.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
const appleRedirectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appleRedirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
appleRedirectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appleRedirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleRedirect
* @see app/Http/Controllers/Auth/SocialiteController.php:63
* @route '/auth/apple/redirect'
*/
appleRedirectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appleRedirect.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

appleRedirect.form = appleRedirectForm

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:71
* @route '/auth/apple/callback'
*/
export const appleCallback = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: appleCallback.url(options),
    method: 'post',
})

appleCallback.definition = {
    methods: ["post"],
    url: '/auth/apple/callback',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:71
* @route '/auth/apple/callback'
*/
appleCallback.url = (options?: RouteQueryOptions) => {
    return appleCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:71
* @route '/auth/apple/callback'
*/
appleCallback.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: appleCallback.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:71
* @route '/auth/apple/callback'
*/
const appleCallbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: appleCallback.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::appleCallback
* @see app/Http/Controllers/Auth/SocialiteController.php:71
* @route '/auth/apple/callback'
*/
appleCallbackForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: appleCallback.url(options),
    method: 'post',
})

appleCallback.form = appleCallbackForm

const SocialiteController = { googleRedirect, googleCallback, appleRedirect, appleCallback }

export default SocialiteController