import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/student/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::index
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:11
* @route '/api/v1/student/resources'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
export const show = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/student/resources/{resource}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
show.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resource: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { resource: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            resource: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        resource: typeof args.resource === 'object'
        ? args.resource.id
        : args.resource,
    }

    return show.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
show.get = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
show.head = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
const showForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
showForm.get = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\ResourceController::show
* @see app/Http/Controllers/Api/V1/Student/ResourceController.php:28
* @route '/api/v1/student/resources/{resource}'
*/
showForm.head = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const ResourceController = { index, show }

export default ResourceController