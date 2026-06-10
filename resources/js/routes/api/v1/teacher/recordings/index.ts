import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/recordings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::index
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:12
* @route '/api/v1/teacher/recordings'
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
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::store
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:17
* @route '/api/v1/teacher/recordings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/teacher/recordings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::store
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:17
* @route '/api/v1/teacher/recordings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::store
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:17
* @route '/api/v1/teacher/recordings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::store
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:17
* @route '/api/v1/teacher/recordings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::store
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:17
* @route '/api/v1/teacher/recordings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:22
* @route '/api/v1/teacher/recordings/{recording}'
*/
export const destroy = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/teacher/recordings/{recording}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:22
* @route '/api/v1/teacher/recordings/{recording}'
*/
destroy.url = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{recording}', parsedArgs.recording.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:22
* @route '/api/v1/teacher/recordings/{recording}'
*/
destroy.delete = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:22
* @route '/api/v1/teacher/recordings/{recording}'
*/
const destroyForm = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\RecordingController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/RecordingController.php:22
* @route '/api/v1/teacher/recordings/{recording}'
*/
destroyForm.delete = (args: { recording: number | { id: number } } | [recording: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const recordings = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default recordings