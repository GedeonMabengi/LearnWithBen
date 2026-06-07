import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
export const index = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/teacher/students/{student}/notes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
index.url = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
index.get = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
index.head = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
    const indexForm = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
        indexForm.get = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::index
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:15
 * @route '/teacher/students/{student}/notes'
 */
        indexForm.head = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::store
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:22
 * @route '/teacher/students/{student}/notes'
 */
export const store = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/teacher/students/{student}/notes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::store
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:22
 * @route '/teacher/students/{student}/notes'
 */
store.url = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::store
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:22
 * @route '/teacher/students/{student}/notes'
 */
store.post = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::store
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:22
 * @route '/teacher/students/{student}/notes'
 */
    const storeForm = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TeacherNoteController::store
 * @see app/Http/Controllers/Web/Teacher/TeacherNoteController.php:22
 * @route '/teacher/students/{student}/notes'
 */
        storeForm.post = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
const notes = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
}

export default notes