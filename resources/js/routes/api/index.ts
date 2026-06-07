import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import v1 from './v1'
/**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
export const fallback = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fallback.url(args, options),
    method: 'get',
})

fallback.definition = {
    methods: ["get","head"],
    url: '/api/{fallbackPlaceholder}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
fallback.url = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fallbackPlaceholder: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fallbackPlaceholder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fallbackPlaceholder: args.fallbackPlaceholder,
                }

    return fallback.definition.url
            .replace('{fallbackPlaceholder}', parsedArgs.fallbackPlaceholder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
fallback.get = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fallback.url(args, options),
    method: 'get',
})
/**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
fallback.head = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fallback.url(args, options),
    method: 'head',
})

    /**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
    const fallbackForm = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: fallback.url(args, options),
        method: 'get',
    })

            /**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
        fallbackForm.get = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fallback.url(args, options),
            method: 'get',
        })
            /**
 * @see routes/api.php:135
 * @route '/api/{fallbackPlaceholder}'
 */
        fallbackForm.head = (args: { fallbackPlaceholder: string | number } | [fallbackPlaceholder: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fallback.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    fallback.form = fallbackForm
const api = {
    v1: Object.assign(v1, v1),
fallback: Object.assign(fallback, fallback),
}

export default api