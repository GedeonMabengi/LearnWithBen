import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\V1\LiveKitController::joinRoom
 * @see app/Http/Controllers/Api/V1/LiveKitController.php:14
 * @route '/api/v1/livekit/join-room'
 */
export const joinRoom = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: joinRoom.url(options),
    method: 'post',
})

joinRoom.definition = {
    methods: ["post"],
    url: '/api/v1/livekit/join-room',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\V1\LiveKitController::joinRoom
 * @see app/Http/Controllers/Api/V1/LiveKitController.php:14
 * @route '/api/v1/livekit/join-room'
 */
joinRoom.url = (options?: RouteQueryOptions) => {
    return joinRoom.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\V1\LiveKitController::joinRoom
 * @see app/Http/Controllers/Api/V1/LiveKitController.php:14
 * @route '/api/v1/livekit/join-room'
 */
joinRoom.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: joinRoom.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\V1\LiveKitController::joinRoom
 * @see app/Http/Controllers/Api/V1/LiveKitController.php:14
 * @route '/api/v1/livekit/join-room'
 */
    const joinRoomForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: joinRoom.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\V1\LiveKitController::joinRoom
 * @see app/Http/Controllers/Api/V1/LiveKitController.php:14
 * @route '/api/v1/livekit/join-room'
 */
        joinRoomForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: joinRoom.url(options),
            method: 'post',
        })
    
    joinRoom.form = joinRoomForm
const livekit = {
    joinRoom: Object.assign(joinRoom, joinRoom),
}

export default livekit