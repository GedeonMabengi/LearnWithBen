import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::google
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:14
* @route '/api/v1/auth/social/google'
*/
export const google = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: google.url(options),
    method: 'post',
})

google.definition = {
    methods: ["post"],
    url: '/api/v1/auth/social/google',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::google
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:14
* @route '/api/v1/auth/social/google'
*/
google.url = (options?: RouteQueryOptions) => {
    return google.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::google
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:14
* @route '/api/v1/auth/social/google'
*/
google.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: google.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::google
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:14
* @route '/api/v1/auth/social/google'
*/
const googleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: google.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::google
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:14
* @route '/api/v1/auth/social/google'
*/
googleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: google.url(options),
    method: 'post',
})

google.form = googleForm

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::apple
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:38
* @route '/api/v1/auth/social/apple'
*/
export const apple = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apple.url(options),
    method: 'post',
})

apple.definition = {
    methods: ["post"],
    url: '/api/v1/auth/social/apple',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::apple
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:38
* @route '/api/v1/auth/social/apple'
*/
apple.url = (options?: RouteQueryOptions) => {
    return apple.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::apple
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:38
* @route '/api/v1/auth/social/apple'
*/
apple.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apple.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::apple
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:38
* @route '/api/v1/auth/social/apple'
*/
const appleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apple.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\SocialAuthController::apple
* @see app/Http/Controllers/Api/V1/SocialAuthController.php:38
* @route '/api/v1/auth/social/apple'
*/
appleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apple.url(options),
    method: 'post',
})

apple.form = appleForm

const SocialAuthController = { google, apple }

export default SocialAuthController