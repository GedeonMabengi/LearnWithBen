import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/recordings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::index
* @see app/Http/Controllers/Web/Student/RecordingController.php:12
* @route '/student/recordings'
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
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
export const show = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/student/recordings/{recording}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
show.url = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recording: args }
    }

    if (Array.isArray(args)) {
        args = {
            recording: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        recording: args.recording,
    }

    return show.definition.url
            .replace('{recording}', parsedArgs.recording.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
show.get = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
show.head = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
const showForm = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
showForm.get = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\RecordingController::show
* @see app/Http/Controllers/Web/Student/RecordingController.php:21
* @route '/student/recordings/{recording}'
*/
showForm.head = (args: { recording: string | number } | [recording: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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