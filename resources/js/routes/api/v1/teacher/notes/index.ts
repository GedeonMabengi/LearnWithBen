import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::update
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:27
* @route '/api/v1/teacher/notes/{note}'
*/
export const update = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/teacher/notes/{note}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::update
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:27
* @route '/api/v1/teacher/notes/{note}'
*/
update.url = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { note: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { note: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            note: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        note: typeof args.note === 'object'
        ? args.note.id
        : args.note,
    }

    return update.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::update
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:27
* @route '/api/v1/teacher/notes/{note}'
*/
update.put = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::update
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:27
* @route '/api/v1/teacher/notes/{note}'
*/
const updateForm = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::update
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:27
* @route '/api/v1/teacher/notes/{note}'
*/
updateForm.put = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:34
* @route '/api/v1/teacher/notes/{note}'
*/
export const destroy = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/teacher/notes/{note}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:34
* @route '/api/v1/teacher/notes/{note}'
*/
destroy.url = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { note: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { note: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            note: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        note: typeof args.note === 'object'
        ? args.note.id
        : args.note,
    }

    return destroy.definition.url
            .replace('{note}', parsedArgs.note.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:34
* @route '/api/v1/teacher/notes/{note}'
*/
destroy.delete = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:34
* @route '/api/v1/teacher/notes/{note}'
*/
const destroyForm = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\V1\Teacher\TeacherNoteController::destroy
* @see app/Http/Controllers/Api/V1/Teacher/TeacherNoteController.php:34
* @route '/api/v1/teacher/notes/{note}'
*/
destroyForm.delete = (args: { note: number | { id: number } } | [note: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const notes = {
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default notes