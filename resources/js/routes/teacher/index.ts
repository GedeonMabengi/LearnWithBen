import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import tokenTypes from './token-types'
import tokens from './tokens'
import courses from './courses'
import enrollments from './enrollments'
import resources from './resources'
import recordings from './recordings'
import skills from './skills'
import students from './students'
import notes from './notes'
import notifications from './notifications'
/**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/teacher/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Web\Teacher\DashboardController::dashboard
 * @see app/Http/Controllers/Web/Teacher/DashboardController.php:11
 * @route '/teacher/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const teacher = {
    dashboard: Object.assign(dashboard, dashboard),
tokenTypes: Object.assign(tokenTypes, tokenTypes),
tokens: Object.assign(tokens, tokens),
courses: Object.assign(courses, courses),
enrollments: Object.assign(enrollments, enrollments),
resources: Object.assign(resources, resources),
recordings: Object.assign(recordings, recordings),
skills: Object.assign(skills, skills),
students: Object.assign(students, students),
notes: Object.assign(notes, notes),
notifications: Object.assign(notifications, notifications),
}

export default teacher