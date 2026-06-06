import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import auth from './auth'
import teacher from './teacher'
import student from './student'
import livekit from './livekit'
import webhook from './webhook'
/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
export const user = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/api/v1/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
user.url = (options?: RouteQueryOptions) => {
    return user.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
user.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
user.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
const userForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
userForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\AuthController::user
* @see app/Http/Controllers/Api/V1/AuthController.php:64
* @route '/api/v1/user'
*/
userForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

user.form = userForm

const v1 = {
    auth: Object.assign(auth, auth),
    user: Object.assign(user, user),
    teacher: Object.assign(teacher, teacher),
    student: Object.assign(student, student),
    livekit: Object.assign(livekit, livekit),
    webhook: Object.assign(webhook, webhook),
}

export default v1