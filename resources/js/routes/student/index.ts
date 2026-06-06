import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import courses from './courses'
import enrollments from './enrollments'
import tokens from './tokens'
import purchase from './purchase'
import resources from './resources'
import recordings from './recordings'
import skills from './skills'
import notifications from './notifications'
/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/student/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\Student\DashboardController::dashboard
* @see app/Http/Controllers/Web/Student/DashboardController.php:11
* @route '/student/dashboard'
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

const student = {
    dashboard: Object.assign(dashboard, dashboard),
    courses: Object.assign(courses, courses),
    enrollments: Object.assign(enrollments, enrollments),
    tokens: Object.assign(tokens, tokens),
    purchase: Object.assign(purchase, purchase),
    resources: Object.assign(resources, resources),
    recordings: Object.assign(recordings, recordings),
    skills: Object.assign(skills, skills),
    notifications: Object.assign(notifications, notifications),
}

export default student