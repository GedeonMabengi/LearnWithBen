import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
export const google = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: google.url(options),
    method: 'get',
})

google.definition = {
    methods: ["get","head"],
    url: '/auth/google/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
google.url = (options?: RouteQueryOptions) => {
    return google.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
google.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: google.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
google.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: google.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
const googleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: google.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
googleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: google.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::google
* @see app/Http/Controllers/Auth/SocialiteController.php:13
* @route '/auth/google/redirect'
*/
googleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: google.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

google.form = googleForm

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
export const apple = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apple.url(options),
    method: 'get',
})

apple.definition = {
    methods: ["get","head"],
    url: '/auth/apple/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
apple.url = (options?: RouteQueryOptions) => {
    return apple.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
apple.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apple.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
apple.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apple.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
const appleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apple.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
appleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apple.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SocialiteController::apple
* @see app/Http/Controllers/Auth/SocialiteController.php:37
* @route '/auth/apple/redirect'
*/
appleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apple.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apple.form = appleForm

const auth = {
    google: Object.assign(google, google),
    apple: Object.assign(apple, apple),
}

export default auth