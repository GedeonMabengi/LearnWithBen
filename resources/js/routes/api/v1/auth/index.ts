import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import social from './social'
/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
 * @see app/Http/Controllers/Api/V1/AuthController.php:14
 * @route '/api/v1/auth/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/v1/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
 * @see app/Http/Controllers/Api/V1/AuthController.php:14
 * @route '/api/v1/auth/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::register
 * @see app/Http/Controllers/Api/V1/AuthController.php:14
 * @route '/api/v1/auth/register'
 */
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::register
 * @see app/Http/Controllers/Api/V1/AuthController.php:14
 * @route '/api/v1/auth/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::register
 * @see app/Http/Controllers/Api/V1/AuthController.php:14
 * @route '/api/v1/auth/register'
 */
        registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
 * @see app/Http/Controllers/Api/V1/AuthController.php:34
 * @route '/api/v1/auth/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/v1/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
 * @see app/Http/Controllers/Api/V1/AuthController.php:34
 * @route '/api/v1/auth/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::login
 * @see app/Http/Controllers/Api/V1/AuthController.php:34
 * @route '/api/v1/auth/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::login
 * @see app/Http/Controllers/Api/V1/AuthController.php:34
 * @route '/api/v1/auth/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::login
 * @see app/Http/Controllers/Api/V1/AuthController.php:34
 * @route '/api/v1/auth/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Api\V1\AuthController::refresh
 * @see app/Http/Controllers/Api/V1/AuthController.php:52
 * @route '/api/v1/auth/refresh'
 */
export const refresh = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: refresh.url(options),
    method: 'post',
})

refresh.definition = {
    methods: ["post"],
    url: '/api/v1/auth/refresh',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::refresh
 * @see app/Http/Controllers/Api/V1/AuthController.php:52
 * @route '/api/v1/auth/refresh'
 */
refresh.url = (options?: RouteQueryOptions) => {
    return refresh.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::refresh
 * @see app/Http/Controllers/Api/V1/AuthController.php:52
 * @route '/api/v1/auth/refresh'
 */
refresh.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: refresh.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::refresh
 * @see app/Http/Controllers/Api/V1/AuthController.php:52
 * @route '/api/v1/auth/refresh'
 */
    const refreshForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: refresh.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::refresh
 * @see app/Http/Controllers/Api/V1/AuthController.php:52
 * @route '/api/v1/auth/refresh'
 */
        refreshForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: refresh.url(options),
            method: 'post',
        })
    
    refresh.form = refreshForm
/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/v1/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\AuthController::logout
 * @see app/Http/Controllers/Api/V1/AuthController.php:57
 * @route '/api/v1/auth/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
const auth = {
    register: Object.assign(register, register),
login: Object.assign(login, login),
refresh: Object.assign(refresh, refresh),
logout: Object.assign(logout, logout),
social: Object.assign(social, social),
}

export default auth