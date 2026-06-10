import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
import notes from './notes'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::index
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:11
* @route '/api/v1/teacher/students'
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
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
export const show = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/teacher/students/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
show.url = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        student: typeof args.student === 'object'
        ? args.student.id
        : args.student,
    }

    return show.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
show.get = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
show.head = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
const showForm = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
showForm.get = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\StudentController::show
* @see app/Http/Controllers/Api/V1/Teacher/StudentController.php:16
* @route '/api/v1/teacher/students/{student}'
*/
showForm.head = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const students = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    notes: Object.assign(notes, notes),
}

export default students