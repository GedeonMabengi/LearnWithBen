package com.engteacher.app.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import com.engteacher.app.model.UserRole
import com.engteacher.app.ui.screens.*
import com.engteacher.app.viewmodel.AuthViewModel
import com.engteacher.app.viewmodel.RoomViewModel

@Composable
fun AppNavGraph(
    navController: NavHostController,
    authViewModel: AuthViewModel = viewModel(),
    roomViewModel: RoomViewModel = viewModel()
) {
    val currentUser by authViewModel.currentUser.collectAsState()

    // Determine start destination based on auth state
    val startDestination = when {
        currentUser == null -> Screen.Login.route
        !currentUser!!.isApproved -> Screen.Login.route  // Will show waiting screen
        else -> {
            when (currentUser!!.role) {
                UserRole.ADMIN -> Screen.AdminDashboard.route
                UserRole.STUDENT -> Screen.StudentDashboard.route
            }
        }
    }

    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        // Login Screen
        composable(Screen.Login.route) {
            LoginScreen(
                authViewModel = authViewModel,
                onLoginSuccess = {
                    // Navigation will be handled by recomposition
                    val user = authViewModel.currentUser.value
                    if (user != null && user.isApproved) {
                        when (user.role) {
                            UserRole.ADMIN -> {
                                navController.navigate(Screen.AdminDashboard.route) {
                                    popUpTo(Screen.Login.route) { inclusive = true }
                                }
                            }
                            UserRole.STUDENT -> {
                                navController.navigate(Screen.StudentDashboard.route) {
                                    popUpTo(Screen.Login.route) { inclusive = true }
                                }
                            }
                        }
                    }
                }
            )
        }

        // Admin Dashboard
        composable(Screen.AdminDashboard.route) {
            AdminDashboardScreen(
                authViewModel = authViewModel,
                roomViewModel = roomViewModel,
                onNavigateToRoom = { roomId ->
                    navController.navigate(Screen.RoomDetail.createRoute(roomId))
                },
                onLogout = {
                    authViewModel.logout()
                    navController.navigate(Screen.Login.route) {
                        popUpTo(0) { inclusive = true }
                    }
                }
            )
        }

        // Student Dashboard
        composable(Screen.StudentDashboard.route) {
            StudentDashboardScreen(
                authViewModel = authViewModel,
                roomViewModel = roomViewModel,
                onNavigateToRoom = { roomId ->
                    navController.navigate(Screen.RoomDetail.createRoute(roomId))
                },
                onLogout = {
                    authViewModel.logout()
                    navController.navigate(Screen.Login.route) {
                        popUpTo(0) { inclusive = true }
                    }
                }
            )
        }

        // Room Detail
        composable(
            route = Screen.RoomDetail.route,
            arguments = listOf(
                navArgument("roomId") { type = NavType.StringType }
            )
        ) { backStackEntry ->
            val roomId = backStackEntry.arguments?.getString("roomId") ?: return@composable
            RoomDetailScreen(
                roomId = roomId,
                authViewModel = authViewModel,
                roomViewModel = roomViewModel,
                onNavigateToVisio = { roomName ->
                    navController.navigate(Screen.Visio.createRoute(roomName))
                },
                onNavigateBack = {
                    navController.popBackStack()
                }
            )
        }

        // Visio Conference
        composable(
            route = Screen.Visio.route,
            arguments = listOf(
                navArgument("roomName") { type = NavType.StringType }
            )
        ) { backStackEntry ->
            val roomName = backStackEntry.arguments?.getString("roomName") ?: return@composable
            val user = authViewModel.currentUser.value

            VisioScreen(
                roomName = roomName,
                displayName = user?.displayName ?: "Utilisateur",
                onLeaveConference = {
                    navController.popBackStack()
                }
            )
        }
    }
}
