package com.engteacher.app.ui.navigation

sealed class Screen(val route: String) {
    object Login : Screen("login")
    object AdminDashboard : Screen("admin_dashboard")
    object StudentDashboard : Screen("student_dashboard")
    object RoomDetail : Screen("room_detail/{roomId}") {
        fun createRoute(roomId: String) = "room_detail/$roomId"
    }
    object Visio : Screen("visio/{roomName}") {
        fun createRoute(roomName: String) = "visio/$roomName"
    }
}
