import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/student/recordings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::index
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:11
* @route '/api/v1/student/recordings'
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
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
export const show = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/student/recordings/{recording}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
show.url = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recording: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { recording: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            recording: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        recording: typeof args.recording === 'object'
        ? args.recording.id
        : args.recording,
    }

    return show.definition.url
            .replace('{recording}', parsedArgs.recording.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
show.get = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
show.head = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
const showForm = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
showForm.get = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Student\RecordingController::show
* @see app/Http/Controllers/Api/V1/Student/RecordingController.php:20
* @route '/api/v1/student/recordings/{recording}'
*/
showForm.head = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const recordings = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default recordings