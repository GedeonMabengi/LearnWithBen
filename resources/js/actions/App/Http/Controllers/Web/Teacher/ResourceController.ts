import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/teacher/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::index
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:17
 * @route '/teacher/resources'
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
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/teacher/resources/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::create
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:24
 * @route '/teacher/resources/create'
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
* @see \App\Http\Controllers\Web\Teacher\ResourceController::store
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:31
 * @route '/teacher/resources'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/teacher/resources',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::store
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:31
 * @route '/teacher/resources'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::store
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:31
 * @route '/teacher/resources'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::store
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:31
 * @route '/teacher/resources'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::store
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:31
 * @route '/teacher/resources'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
 */
export const show = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/teacher/resources/{resource}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
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
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
 */
show.get = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
 */
show.head = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
 */
    const showForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
 */
        showForm.get = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::show
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:50
 * @route '/teacher/resources/{resource}'
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
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
export const edit = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/teacher/resources/{resource}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
edit.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
edit.get = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
edit.head = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
    const editForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
        editForm.get = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::edit
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:55
 * @route '/teacher/resources/{resource}/edit'
 */
        editForm.head = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
export const update = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/teacher/resources/{resource}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
update.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
update.put = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
update.patch = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
    const updateForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
        updateForm.put = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::update
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:62
 * @route '/teacher/resources/{resource}'
 */
        updateForm.patch = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Web\Teacher\ResourceController::destroy
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:76
 * @route '/teacher/resources/{resource}'
 */
export const destroy = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/teacher/resources/{resource}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::destroy
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:76
 * @route '/teacher/resources/{resource}'
 */
destroy.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::destroy
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:76
 * @route '/teacher/resources/{resource}'
 */
destroy.delete = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::destroy
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:76
 * @route '/teacher/resources/{resource}'
 */
    const destroyForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::destroy
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:76
 * @route '/teacher/resources/{resource}'
 */
        destroyForm.delete = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::grantAccess
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:84
 * @route '/teacher/resources/{resource}/grant-access'
 */
export const grantAccess = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grantAccess.url(args, options),
    method: 'post',
})

grantAccess.definition = {
    methods: ["post"],
    url: '/teacher/resources/{resource}/grant-access',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::grantAccess
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:84
 * @route '/teacher/resources/{resource}/grant-access'
 */
grantAccess.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return grantAccess.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::grantAccess
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:84
 * @route '/teacher/resources/{resource}/grant-access'
 */
grantAccess.post = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: grantAccess.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::grantAccess
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:84
 * @route '/teacher/resources/{resource}/grant-access'
 */
    const grantAccessForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: grantAccess.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\ResourceController::grantAccess
 * @see app/Http/Controllers/Web/Teacher/ResourceController.php:84
 * @route '/teacher/resources/{resource}/grant-access'
 */
        grantAccessForm.post = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: grantAccess.url(args, options),
            method: 'post',
        })
    
    grantAccess.form = grantAccessForm
const ResourceController = { index, create, store, show, edit, update, destroy, grantAccess }

export default ResourceController