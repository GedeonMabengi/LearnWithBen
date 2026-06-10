package com.engteacher.app.ui.screens

import androidx.compose.animation.*
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
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
fun AdminDashboardScreen(
    authViewModel: AuthViewModel,
    roomViewModel: RoomViewModel,
    onNavigateToRoom: (String) -> Unit,
    onLogout: () -> Unit
) {
    val currentUser by authViewModel.currentUser.collectAsState()
    val rooms by roomViewModel.rooms.collectAsState()
    val isLoading by roomViewModel.isLoading.collectAsState()

    var showCreateDialog by remember { mutableStateOf(false) }
    var showStudentsDialog by remember { mutableStateOf(false) }
    var selectedRoomForStudents by remember { mutableStateOf<Room?>(null) }

    // Load admin rooms once per admin UID to avoid duplicate Firestore listeners
    LaunchedEffect(currentUser?.uid) {
        currentUser?.uid?.let { uid ->
            roomViewModel.loadAdminRooms(uid)
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text("Tableau de bord")
                        Text(
                            text = "Prof. ${currentUser?.displayName ?: ""}",
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
                    IconButton(onClick = { showStudentsDialog = true }) {
                        Icon(Icons.Filled.People, contentDescription = "Étudiants")
                    }
                    IconButton(onClick = onLogout) {
                        Icon(Icons.Filled.Logout, contentDescription = "Déconnexion")
                    }
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = { showCreateDialog = true },
                containerColor = Primary
            ) {
                Icon(Icons.Filled.Add, contentDescription = "Créer une salle", tint = MaterialTheme.colorScheme.onPrimary)
            }
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            // Stats cards
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                StatCard(
                    title = "Salles actives",
                    value = rooms.count { it.isOpen }.toString(),
                    icon = Icons.Filled.VideoCameraFront,
                    modifier = Modifier.weight(1f)
                )
                StatCard(
                    title = "Salles fermées",
                    value = rooms.count { !it.isOpen }.toString(),
                    icon = Icons.Filled.VideocamOff,
                    modifier = Modifier.weight(1f)
                )
            }

            Text(
                text = "Mes salles de visioconférence",
                style = MaterialTheme.typography.titleLarge,
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
            )

            // Rooms list
            if (rooms.isEmpty()) {
                EmptyStateMessage(
                    icon = Icons.Filled.VideoCameraFront,
                    message = "Aucune salle créée",
                    subMessage = "Appuyez sur le bouton + pour créer votre première salle"
                )
            } else {
                LazyColumn(
                    modifier = Modifier.fillMaxSize(),
                    contentPadding = PaddingValues(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    items(rooms, key = { it.id }) { room ->
                        AdminRoomCard(
                            room = room,
                            onOpenRoom = { onNavigateToRoom(room.id) },
                            onToggleStatus = {
                                if (room.isOpen) roomViewModel.closeRoom(room.id)
                                else roomViewModel.openRoom(room.id)
                            },
                            onDeleteRoom = { roomViewModel.deleteRoom(room.id) },
                            onManageStudents = {
                                selectedRoomForStudents = room
                                showStudentsDialog = true
                            }
                        )
                    }
                }
            }
        }
    }

    // Create Room Dialog
    if (showCreateDialog) {
        CreateRoomDialog(
            onDismiss = { showCreateDialog = false },
            onCreate = { name, description ->
                currentUser?.let {
                    roomViewModel.createRoom(name, description, it.uid)
                }
                showCreateDialog = false
            }
        )
    }

    // Students Management Dialog
    if (showStudentsDialog) {
        StudentsManagementDialog(
            room = selectedRoomForStudents,
            roomViewModel = roomViewModel,
            onDismiss = {
                showStudentsDialog = false
                selectedRoomForStudents = null
            }
        )
    }
}

@Composable
private fun StatCard(
    title: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier,
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        ),
        shape = RoundedCornerShape(16.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                tint = Primary,
                modifier = Modifier.size(28.dp)
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = value,
                style = MaterialTheme.typography.headlineMedium,
                color = Primary
            )
            Text(
                text = title,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onPrimaryContainer
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun AdminRoomCard(
    room: Room,
    onOpenRoom: () -> Unit,
    onToggleStatus: () -> Unit,
    onDeleteRoom: () -> Unit,
    onManageStudents: () -> Unit
) {
    var expanded by remember { mutableStateOf(false) }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onOpenRoom() },
        shape = RoundedCornerShape(16.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    modifier = Modifier.weight(1f),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Status indicator
                    Surface(
                        shape = RoundedCornerShape(8.dp),
                        color = if (room.isOpen) Success.copy(alpha = 0.15f) else Warning.copy(alpha = 0.15f),
                        modifier = Modifier.padding(end = 12.dp)
                    ) {
                        Text(
                            text = if (room.isOpen) "OUVERTE" else "FERMÉE",
                            style = MaterialTheme.typography.labelSmall,
                            color = if (room.isOpen) Success else Warning,
                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                        )
                    }

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
                                maxLines = 1,
                                overflow = TextOverflow.Ellipsis
                            )
                        }
                    }
                }

                IconButton(onClick = { expanded = true }) {
                    Icon(Icons.Filled.MoreVert, contentDescription = "Options")
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            // Access code and participants
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    shape = RoundedCornerShape(8.dp),
                    color = MaterialTheme.colorScheme.surfaceVariant
                ) {
                    Row(
                        modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            Icons.Filled.Key,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp),
                            tint = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = room.accessCode,
                            style = MaterialTheme.typography.labelLarge,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }

                Text(
                    text = "${room.participants.size} étudiant(s)",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }

    // Options menu
    DropdownMenu(
        expanded = expanded,
        onDismissRequest = { expanded = false }
    ) {
        DropdownMenuItem(
            text = { Text(if (room.isOpen) "Fermer la salle" else "Ouvrir la salle") },
            leadingIcon = {
                Icon(
                    if (room.isOpen) Icons.Filled.Close else Icons.Filled.PlayArrow,
                    contentDescription = null
                )
            },
            onClick = {
                expanded = false
                onToggleStatus()
            }
        )
        DropdownMenuItem(
            text = { Text("Gérer les étudiants") },
            leadingIcon = { Icon(Icons.Filled.People, contentDescription = null) },
            onClick = {
                expanded = false
                onManageStudents()
            }
        )
        DropdownMenuItem(
            text = { Text("Supprimer") },
            leadingIcon = { Icon(Icons.Filled.Delete, contentDescription = null) },
            onClick = {
                expanded = false
                onDeleteRoom()
            }
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun CreateRoomDialog(
    onDismiss: () -> Unit,
    onCreate: (String, String) -> Unit
) {
    var name by remember { mutableStateOf("") }
    var description by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Créer une salle") },
        text = {
            Column {
                OutlinedTextField(
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Nom de la salle *") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true
                )
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = description,
                    onValueChange = { description = it },
                    label = { Text("Description") },
                    modifier = Modifier.fillMaxWidth(),
                    minLines = 2
                )
            }
        },
        confirmButton = {
            Button(
                onClick = { onCreate(name, description) },
                enabled = name.isNotBlank()
            ) {
                Text("Créer")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Annuler")
            }
        }
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun StudentsManagementDialog(
    room: Room?,
    roomViewModel: RoomViewModel,
    onDismiss: () -> Unit
) {
    val participants by roomViewModel.participants.collectAsState()
    val pendingParticipants by roomViewModel.pendingParticipants.collectAsState()

    // Load participants if a specific room is selected
    LaunchedEffect(room) {
        room?.let {
            roomViewModel.loadRoomDetails(it.id)
        }
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Text(if (room != null) "Étudiants - ${room.name}" else "Tous les étudiants")
        },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .heightIn(max = 400.dp)
                    .verticalScroll(rememberScrollState())
            ) {
                if (room != null) {
                    // Pending students
                    if (pendingParticipants.isNotEmpty()) {
                        Text(
                            text = "En attente (${pendingParticipants.size})",
                            style = MaterialTheme.typography.titleSmall,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        pendingParticipants.forEach { student ->
                            StudentPendingCard(
                                student = student,
                                onApprove = { roomViewModel.approveParticipant(room.id, student.uid) },
                                onReject = { roomViewModel.rejectParticipant(room.id, student.uid) }
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                        }
                        Spacer(modifier = Modifier.height(16.dp))
                    }

                    // Approved students
                    Text(
                        text = "Approuvés (${participants.size})",
                        style = MaterialTheme.typography.titleSmall,
                        color = Success
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    if (participants.isEmpty()) {
                        Text(
                            text = "Aucun étudiant approuvé",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    } else {
                        participants.forEach { student ->
                            StudentApprovedCard(
                                student = student,
                                onRemove = { roomViewModel.removeParticipant(room.id, student.uid) }
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                        }
                    }
                } else {
                    // Show global student list
                    Text(
                        text = "Sélectionnez une salle pour gérer les étudiants",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        },
        confirmButton = {
            TextButton(onClick = onDismiss) {
                Text("Fermer")
            }
        }
    )
}

@Composable
private fun StudentPendingCard(
    student: User,
    onApprove: () -> Unit,
    onReject: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = Warning.copy(alpha = 0.08f)
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(text = student.displayName, style = MaterialTheme.typography.bodyMedium)
                Text(
                    text = student.email,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Row {
                IconButton(onClick = onApprove) {
                    Icon(Icons.Filled.CheckCircle, contentDescription = "Approuver", tint = Success)
                }
                IconButton(onClick = onReject) {
                    Icon(Icons.Filled.Cancel, contentDescription = "Rejeter", tint = MaterialTheme.colorScheme.error)
                }
            }
        }
    }
}

@Composable
private fun StudentApprovedCard(
    student: User,
    onRemove: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = Success.copy(alpha = 0.08f)
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(text = student.displayName, style = MaterialTheme.typography.bodyMedium)
                Text(
                    text = student.email,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            IconButton(onClick = onRemove) {
                Icon(Icons.Filled.RemoveCircle, contentDescription = "Retirer", tint = MaterialTheme.colorScheme.error)
            }
        }
    }
}

@Composable
fun EmptyStateMessage(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    message: String,
    subMessage: String
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            modifier = Modifier.size(64.dp),
            tint = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.5f)
        )
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = message,
            style = MaterialTheme.typography.titleMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = subMessage,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f),
            textAlign = androidx.compose.ui.text.style.TextAlign.Center
        )
    }
}
