import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/teacher/token-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::index
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:14
 * @route '/teacher/token-types'
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
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/teacher/token-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::create
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:21
 * @route '/teacher/token-types/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::store
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:26
 * @route '/teacher/token-types'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/teacher/token-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::store
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:26
 * @route '/teacher/token-types'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::store
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:26
 * @route '/teacher/token-types'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::store
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:26
 * @route '/teacher/token-types'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::store
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:26
 * @route '/teacher/token-types'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
export const show = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/teacher/token-types/{token_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
show.url = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token_type: typeof args.token_type === 'object'
                ? args.token_type.id
                : args.token_type,
                }

    return show.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
show.get = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
show.head = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
    const showForm = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
        showForm.get = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::show
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:46
 * @route '/teacher/token-types/{token_type}'
 */
        showForm.head = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
export const edit = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/teacher/token-types/{token_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
edit.url = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token_type: typeof args.token_type === 'object'
                ? args.token_type.id
                : args.token_type,
                }

    return edit.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
edit.get = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
edit.head = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
    const editForm = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
        editForm.get = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::edit
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:51
 * @route '/teacher/token-types/{token_type}/edit'
 */
        editForm.head = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
export const update = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/teacher/token-types/{token_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
update.url = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token_type: typeof args.token_type === 'object'
                ? args.token_type.id
                : args.token_type,
                }

    return update.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
update.put = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
update.patch = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
    const updateForm = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
        updateForm.put = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::update
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:56
 * @route '/teacher/token-types/{token_type}'
 */
        updateForm.patch = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::destroy
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:75
 * @route '/teacher/token-types/{token_type}'
 */
export const destroy = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/teacher/token-types/{token_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::destroy
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:75
 * @route '/teacher/token-types/{token_type}'
 */
destroy.url = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token_type: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { token_type: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    token_type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token_type: typeof args.token_type === 'object'
                ? args.token_type.id
                : args.token_type,
                }

    return destroy.definition.url
            .replace('{token_type}', parsedArgs.token_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::destroy
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:75
 * @route '/teacher/token-types/{token_type}'
 */
destroy.delete = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::destroy
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:75
 * @route '/teacher/token-types/{token_type}'
 */
    const destroyForm = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\TokenTypeController::destroy
 * @see app/Http/Controllers/Web/Teacher/TokenTypeController.php:75
 * @route '/teacher/token-types/{token_type}'
 */
        destroyForm.delete = (args: { token_type: number | { id: number } } | [token_type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const TokenTypeController = { index, create, store, show, edit, update, destroy }

export default TokenTypeController