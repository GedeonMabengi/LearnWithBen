package com.engteacher.app.ui.screens

import androidx.compose.animation.*
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.engteacher.app.model.Room
import com.engteacher.app.model.User
import com.engteacher.app.ui.theme.Primary
import com.engteacher.app.ui.theme.Success
import com.engteacher.app.ui.theme.Warning
import com.engteacher.app.viewmodel.AuthViewModel
import com.engteacher.app.viewmodel.RoomViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudentDashboardScreen(
    authViewModel: AuthViewModel,
    roomViewModel: RoomViewModel,
    onNavigateToRoom: (String) -> Unit,
    onLogout: () -> Unit
) {
    val currentUser by authViewModel.currentUser.collectAsState()
    val rooms by roomViewModel.rooms.collectAsState()
    val joinRoomResult by roomViewModel.joinRoomResult.collectAsState()

    var showJoinDialog by remember { mutableStateOf(false) }
    var showJoinSuccessDialog by remember { mutableStateOf(false) }
    var joinedRoom by remember { mutableStateOf<Room?>(null) }

    // Load open rooms
    LaunchedEffect(Unit) {
        roomViewModel.loadOpenRooms()
    }

    // Handle successful room join code lookup
    LaunchedEffect(joinRoomResult) {
        joinRoomResult?.let { room ->
            joinedRoom = room
            showJoinSuccessDialog = true
            roomViewModel.clearJoinResult()
        }
    }

    // Filter rooms the student is part of
    val myRooms = rooms.filter { room ->
        room.participants.contains(currentUser?.uid)
    }
    val availableRooms = rooms.filter { room ->
        !room.participants.contains(currentUser?.uid) &&
        !room.pendingParticipants.contains(currentUser?.uid)
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text("Mes Cours d'Anglais")
                        Text(
                            text = currentUser?.displayName ?: "",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onPrimary.copy(alpha = 0.7f)
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = Primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                    actionIconContentColor = MaterialTheme.colorScheme.onPrimary
                ),
                actions = {
                    IconButton(onClick = { showJoinDialog = true }) {
                        Icon(Icons.Filled.AddLink, contentDescription = "Rejoindre une salle")
                    }
                    IconButton(onClick = onLogout) {
                        Icon(Icons.Filled.Logout, contentDescription = "Déconnexion")
                    }
                }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            // Status card
            currentUser?.let { user ->
                if (!user.isApproved) {
                    ApprovalStatusCard()
                }
            }

            // My rooms section
            Text(
                text = "Mes salles",
                style = MaterialTheme.typography.titleLarge,
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
            )

            if (myRooms.isEmpty()) {
                EmptyStateMessage(
                    icon = Icons.Filled.VideoLibrary,
                    message = "Vous n'êtes inscrit à aucune salle",
                    subMessage = "Utilisez le bouton + pour rejoindre un cours avec un code d'accès"
                )
            } else {
                LazyColumn(
                    modifier = Modifier.weight(1f),
                    contentPadding = PaddingValues(horizontal = 16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    items(myRooms, key = { it.id }) { room ->
                        StudentRoomCard(
                            room = room,
                            onClick = { onNavigateToRoom(room.id) }
                        )
                    }
                }
            }

            // Available rooms section
            if (availableRooms.isNotEmpty()) {
                Text(
                    text = "Salles disponibles",
                    style = MaterialTheme.typography.titleLarge,
                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                )
                LazyColumn(
                    modifier = Modifier.weight(1f),
                    contentPadding = PaddingValues(horizontal = 16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    items(availableRooms, key = { it.id }) { room ->
                        AvailableRoomCard(
                            room = room,
                            onJoin = {
                                currentUser?.let { user ->
                                    roomViewModel.requestJoinRoom(room.id, user.uid)
                                }
                            }
                        )
                    }
                }
            }
        }
    }

    // Join Room Dialog
    if (showJoinDialog) {
        JoinRoomDialog(
            onDismiss = { showJoinDialog = false },
            onJoin = { code ->
                roomViewModel.joinRoomWithCode(code)
                showJoinDialog = false
            }
        )
    }

    // Join Success Dialog
    if (showJoinSuccessDialog) {
        joinedRoom?.let { room ->
            AlertDialog(
                onDismissRequest = {
                    showJoinSuccessDialog = false
                    joinedRoom = null
                },
                icon = {
                    Icon(Icons.Filled.CheckCircle, contentDescription = null, tint = Success)
                },
                title = { Text("Salle trouvée !") },
                text = {
                    Column {
                        Text("Salle : ${room.name}")
                        if (room.description.isNotBlank()) {
                            Text("Description : ${room.description}")
                        }
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(
                            "Voulez-vous envoyer une demande d'inscription ?",
                            style = MaterialTheme.typography.bodyMedium
                        )
                    }
                },
                confirmButton = {
                    Button(
                        onClick = {
                            currentUser?.let { user ->
                                roomViewModel.requestJoinRoom(room.id, user.uid)
                            }
                            showJoinSuccessDialog = false
                            joinedRoom = null
                        }
                    ) {
                        Text("Envoyer la demande")
                    }
                },
                dismissButton = {
                    TextButton(
                        onClick = {
                            showJoinSuccessDialog = false
                            joinedRoom = null
                        }
                    ) {
                        Text("Annuler")
                    }
                }
            )
        }
    }
}

@Composable
private fun ApprovalStatusCard() {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = Warning.copy(alpha = 0.12f)
        ),
        shape = RoundedCornerShape(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                Icons.Filled.HourglassTop,
                contentDescription = null,
                tint = Warning,
                modifier = Modifier.size(32.dp)
            )
            Spacer(modifier = Modifier.width(12.dp))
            Column {
                Text(
                    text = "Compte en attente",
                    style = MaterialTheme.typography.titleSmall,
                    color = Warning
                )
                Text(
                    text = "Votre compte doit être approuvé par le professeur pour accéder aux cours.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}

@Composable
private fun StudentRoomCard(
    room: Room,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(enabled = room.isOpen, onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        colors = if (room.isOpen) {
            CardDefaults.cardColors()
        } else {
            CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
            )
        }
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    shape = RoundedCornerShape(8.dp),
                    color = if (room.isOpen) Success.copy(alpha = 0.15f) else MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.15f)
                ) {
                    Text(
                        text = if (room.isOpen) "ACTIVE" else "FERMÉE",
                        style = MaterialTheme.typography.labelSmall,
                        color = if (room.isOpen) Success else MaterialTheme.colorScheme.onSurfaceVariant,
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                    )
                }
                Spacer(modifier = Modifier.width(12.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = room.name,
                        style = MaterialTheme.typography.titleMedium,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    if (room.description.isNotBlank()) {
                        Text(
                            text = room.description,
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                }
                if (room.isOpen) {
                    Icon(
                        Icons.Filled.VideoCameraFront,
                        contentDescription = "Rejoindre",
                        tint = Primary
                    )
                }
            }

            if (!room.isOpen) {
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = "Cette salle est actuellement fermée.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}

@Composable
private fun AvailableRoomCard(
    room: Room,
    onJoin: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = room.name,
                    style = MaterialTheme.typography.titleMedium
                )
                if (room.description.isNotBlank()) {
                    Text(
                        text = room.description,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
            OutlinedButton(onClick = onJoin) {
                Text("Demander")
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun JoinRoomDialog(
    onDismiss: () -> Unit,
    onJoin: (String) -> Unit
) {
    var code by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Rejoindre une salle") },
        text = {
            Column {
                Text(
                    "Entrez le code d'accès fourni par votre professeur.",
                    style = MaterialTheme.typography.bodyMedium,
                    modifier = Modifier.padding(bottom = 16.dp)
                )
                OutlinedTextField(
                    value = code,
                    onValueChange = { code = it.uppercase() },
                    label = { Text("Code d'accès") },
                    leadingIcon = { Icon(Icons.Filled.Key, contentDescription = null) },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Text,
                        imeAction = ImeAction.Done
                    )
                )
            }
        },
        confirmButton = {
            Button(
                onClick = { onJoin(code) },
                enabled = code.length >= 4
            ) {
                Text("Rechercher")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Annuler")
            }
        }
    )
}
