package com.engteacher.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.rememberNavController
import com.engteacher.app.ui.navigation.AppNavGraph
import com.engteacher.app.ui.theme.EngTeacherTheme
import com.engteacher.app.viewmodel.AuthViewModel
import com.engteacher.app.viewmodel.RoomViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            EngTeacherTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()
                    val authViewModel: AuthViewModel = viewModel()
                    val roomViewModel: RoomViewModel = viewModel()

                    AppNavGraph(
                        navController = navController,
                        authViewModel = authViewModel,
                        roomViewModel = roomViewModel
                    )
                }
            }
        }
    }
}
