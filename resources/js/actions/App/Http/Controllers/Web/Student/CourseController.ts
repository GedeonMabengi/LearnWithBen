import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::index
* @see app/Http/Controllers/Web/Student/CourseController.php:13
* @route '/student/courses'
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
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
export const show = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/student/courses/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
show.url = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: args.course,
    }

    return show.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
show.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
show.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
const showForm = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
showForm.get = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\CourseController::show
* @see app/Http/Controllers/Web/Student/CourseController.php:29
* @route '/student/courses/{course}'
*/
showForm.head = (args: { course: string | number } | [course: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const CourseController = { index, show }

export default CourseController