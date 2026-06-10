package com.engteacher.app.ui.screens

import androidx.compose.animation.*
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.ClipboardManager
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.engteacher.app.model.Room
import com.engteacher.app.model.User
import com.engteacher.app.model.UserRole
import com.engteacher.app.ui.theme.Primary
import com.engteacher.app.ui.theme.Success
import com.engteacher.app.ui.theme.Warning
import com.engteacher.app.viewmodel.AuthViewModel
import com.engteacher.app.viewmodel.RoomViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RoomDetailScreen(
    roomId: String,
    authViewModel: AuthViewModel,
    roomViewModel: RoomViewModel,
    onNavigateToVisio: (String) -> Unit,
    onNavigateBack: () -> Unit
) {
    val currentUser by authViewModel.currentUser.collectAsState()
    val room by roomViewModel.currentRoom.collectAsState()
    val participants by roomViewModel.participants.collectAsState()

    val clipboardManager: ClipboardManager = LocalClipboardManager.current
    var showCopiedMessage by remember { mutableStateOf(false) }

    // Load room details
    LaunchedEffect(roomId) {
        roomViewModel.loadRoomDetails(roomId)
    }

    if (room == null) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator()
        }
        return
    }

    val isAdmin = currentUser?.role == UserRole.ADMIN
    val isParticipant = room!!.participants.contains(currentUser?.uid)
    val canJoin = room!!.isOpen && (isAdmin || isParticipant)

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(room!!.name, maxLines = 1)
                },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(Icons.Filled.ArrowBack, contentDescription = "Retour")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = Primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                    navigationIconContentColor = MaterialTheme.colorScheme.onPrimary
                )
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState()),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Room status header
            Surface(
                modifier = Modifier.fillMaxWidth(),
                color = if (room!!.isOpen) Success.copy(alpha = 0.1f) else Warning.copy(alpha = 0.1f)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        if (room!!.isOpen) Icons.Filled.Circle else Icons.Filled.Circle,
                        contentDescription = null,
                        tint = if (room!!.isOpen) Success else Warning,
                        modifier = Modifier.size(12.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = if (room!!.isOpen) "Salle ouverte" else "Salle fermée",
                        style = MaterialTheme.typography.titleMedium,
                        color = if (room!!.isOpen) Success else Warning
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Room info card
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp),
                shape = RoundedCornerShape(16.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Column(modifier = Modifier.padding(20.dp)) {
                    // Description
                    if (room!!.description.isNotBlank()) {
                        Text(
                            text = "Description",
                            style = MaterialTheme.typography.labelLarge,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = room!!.description,
                            style = MaterialTheme.typography.bodyLarge
                        )
                        Spacer(modifier = Modifier.height(16.dp))
                    }

                    // Access Code (visible for admin and participants)
                    Text(
                        text = "Code d'accès",
                        style = MaterialTheme.typography.labelLarge,
                        color = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Surface(
                        shape = RoundedCornerShape(12.dp),
                        color = MaterialTheme.colorScheme.primaryContainer,
                        modifier = Modifier.clickable {
                            clipboardManager.setText(AnnotatedString(room!!.accessCode))
                            showCopiedMessage = true
                        }
                    ) {
                        Row(
                            modifier = Modifier.padding(horizontal = 20.dp, vertical = 14.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.Center
                        ) {
                            Text(
                                text = room!!.accessCode,
                                style = MaterialTheme.typography.headlineMedium,
                                color = MaterialTheme.colorScheme.onPrimaryContainer,
                                letterSpacing = 4.sp
                            )
                            Spacer(modifier = Modifier.width(12.dp))
                            Icon(
                                Icons.Filled.ContentCopy,
                                contentDescription = "Copier",
                                tint = MaterialTheme.colorScheme.onPrimaryContainer,
                                modifier = Modifier.size(20.dp)
                            )
                        }
                    }
                    if (showCopiedMessage) {
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Code copié !",
                            style = MaterialTheme.typography.bodySmall,
                            color = Success,
                            modifier = Modifier.fillMaxWidth(),
                            textAlign = TextAlign.Center
                        )
                        LaunchedEffect(Unit) {
                            kotlinx.coroutines.delay(2000)
                            showCopiedMessage = false
                        }
                    }

                    Spacer(modifier = Modifier.height(16.dp))

                    // Participants count
                    Text(
                        text = "Participants",
                        style = MaterialTheme.typography.labelLarge,
                        color = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            Icons.Filled.People,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onSurfaceVariant,
                            modifier = Modifier.size(20.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "${participants.size} étudiant(s) approuvé(s)",
                            style = MaterialTheme.typography.bodyMedium
                        )
                    }
                    if (room!!.pendingParticipants.isNotEmpty() && isAdmin) {
                        Spacer(modifier = Modifier.height(4.dp))
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                Icons.Filled.HourglassTop,
                                contentDescription = null,
                                tint = Warning,
                                modifier = Modifier.size(20.dp)
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = "${room!!.pendingParticipants.size} en attente d'approbation",
                                style = MaterialTheme.typography.bodyMedium,
                                color = Warning
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Action buttons
            if (isAdmin) {
                // Admin actions
                AdminRoomActions(
                    room = room!!,
                    onOpenVisio = { onNavigateToVisio(room!!.jitsiRoomName) },
                    onToggleRoom = {
                        if (room!!.isOpen) roomViewModel.closeRoom(room!!.id)
                        else roomViewModel.openRoom(room!!.id)
                    },
                    onRefreshParticipants = { roomViewModel.refreshRoomParticipants() }
                )
            } else {
                // Student actions
                if (canJoin) {
                    Button(
                        onClick = { onNavigateToVisio(room!!.jitsiRoomName) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp)
                            .height(56.dp),
                        shape = RoundedCornerShape(16.dp)
                    ) {
                        Icon(Icons.Filled.VideoCameraFront, contentDescription = null)
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            "Rejoindre la visioconférence",
                            style = MaterialTheme.typography.titleMedium
                        )
                    }
                } else if (!room!!.isOpen) {
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = Warning.copy(alpha = 0.1f)
                        )
                    ) {
                        Row(
                            modifier = Modifier.padding(16.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(
                                Icons.Filled.Lock,
                                contentDescription = null,
                                tint = Warning
                            )
                            Spacer(modifier = Modifier.width(12.dp))
                            Text(
                                text = "Cette salle est fermée. Attendez que le professeur l'ouvre.",
                                style = MaterialTheme.typography.bodyMedium,
                                color = Warning
                            )
                        }
                    }
                } else {
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.5f)
                        )
                    ) {
                        Row(
                            modifier = Modifier.padding(16.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(
                                Icons.Filled.Error,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.error
                            )
                            Spacer(modifier = Modifier.width(12.dp))
                            Text(
                                text = "Vous n'êtes pas inscrit à cette salle.",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.error
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(32.dp))
        }
    }
}

@Composable
private fun AdminRoomActions(
    room: Room,
    onOpenVisio: () -> Unit,
    onToggleRoom: () -> Unit,
    onRefreshParticipants: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        // Start visio button
        Button(
            onClick = onOpenVisio,
            modifier = Modifier
                .fillMaxWidth()
                .height(56.dp),
            shape = RoundedCornerShape(16.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = Success
            )
        ) {
            Icon(Icons.Filled.VideoCall, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                "Démarrer la visioconférence",
                style = MaterialTheme.typography.titleMedium
            )
        }

        // Open/Close room button
        OutlinedButton(
            onClick = onToggleRoom,
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp),
            shape = RoundedCornerShape(12.dp),
            colors = ButtonDefaults.outlinedButtonColors(
                contentColor = if (room.isOpen) Warning else Success
            )
        ) {
            Icon(
                if (room.isOpen) Icons.Filled.Close else Icons.Filled.PlayArrow,
                contentDescription = null
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                if (room.isOpen) "Fermer la salle" else "Ouvrir la salle",
                style = MaterialTheme.typography.labelLarge
            )
        }

        // Refresh participants
        OutlinedButton(
            onClick = onRefreshParticipants,
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp),
            shape = RoundedCornerShape(12.dp)
        ) {
            Icon(Icons.Filled.Refresh, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                "Actualiser les participants",
                style = MaterialTheme.typography.labelLarge
            )
        }
    }
}
