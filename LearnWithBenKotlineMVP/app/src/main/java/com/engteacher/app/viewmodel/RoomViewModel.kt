package com.engteacher.app.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.engteacher.app.data.FirestoreManager
import com.engteacher.app.model.Room
import com.engteacher.app.model.User
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class RoomViewModel : ViewModel() {

    private val firestoreManager = FirestoreManager()

    private val _rooms = MutableStateFlow<List<Room>>(emptyList())
    val rooms: StateFlow<List<Room>> = _rooms.asStateFlow()

    private val _currentRoom = MutableStateFlow<Room?>(null)
    val currentRoom: StateFlow<Room?> = _currentRoom.asStateFlow()

    private val _participants = MutableStateFlow<List<User>>(emptyList())
    val participants: StateFlow<List<User>> = _participants.asStateFlow()

    private val _pendingParticipants = MutableStateFlow<List<User>>(emptyList())
    val pendingParticipants: StateFlow<List<User>> = _pendingParticipants.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    private val _errorMessage = MutableStateFlow<String?>(null)
    val errorMessage: StateFlow<String?> = _errorMessage.asStateFlow()

    private val _successMessage = MutableStateFlow<String?>(null)
    val successMessage: StateFlow<String?> = _successMessage.asStateFlow()

    private val _joinRoomResult = MutableStateFlow<Room?>(null)
    val joinRoomResult: StateFlow<Room?> = _joinRoomResult.asStateFlow()

    private var adminRoomsJob: Job? = null
    private var activeAdminId: String? = null

    fun loadAdminRooms(adminId: String) {
        if (activeAdminId == adminId && adminRoomsJob?.isActive == true) {
            return
        }

        adminRoomsJob?.cancel()
        activeAdminId = adminId

        adminRoomsJob = viewModelScope.launch {
            firestoreManager.getRoomsByAdmin(adminId).collect { roomList ->
                _rooms.value = roomList
            }
        }
    }

    fun loadOpenRooms() {
        viewModelScope.launch {
            firestoreManager.getOpenRooms().collect { roomList ->
                _rooms.value = roomList
            }
        }
    }

    fun createRoom(name: String, description: String, adminId: String) {
        viewModelScope.launch {
            _isLoading.value = true
            _errorMessage.value = null
            val result = firestoreManager.createRoom(name, description, adminId)
            result.onSuccess {
                _successMessage.value = "Salle \"${it.name}\" créée avec succès !"
            }.onFailure {
                _errorMessage.value = it.localizedMessage ?: "Erreur lors de la création"
            }
            _isLoading.value = false
        }
    }

    fun loadRoomDetails(roomId: String) {
        viewModelScope.launch {
            firestoreManager.getRoomByIdFlow(roomId).collect { room ->
                _currentRoom.value = room
                if (room != null) {
                    loadRoomParticipants(room)
                }
            }
        }
    }

    private suspend fun loadRoomParticipants(room: Room) {
        _participants.value = firestoreManager.getParticipantsDetails(room)
        _pendingParticipants.value = firestoreManager.getPendingParticipantsDetails(room)
    }

    fun refreshRoomParticipants() {
        viewModelScope.launch {
            _currentRoom.value?.let { room ->
                loadRoomParticipants(room)
            }
        }
    }

    fun joinRoomWithCode(accessCode: String) {
        viewModelScope.launch {
            _isLoading.value = true
            _errorMessage.value = null
            _joinRoomResult.value = null
            
            val room = firestoreManager.getRoomByAccessCode(accessCode)
            if (room != null) {
                _joinRoomResult.value = room
            } else {
                _errorMessage.value = "Code d'accès invalide ou salle fermée"
            }
            _isLoading.value = false
        }
    }

    fun requestJoinRoom(roomId: String, userId: String) {
        viewModelScope.launch {
            _isLoading.value = true
            val result = firestoreManager.requestJoinRoom(roomId, userId)
            result.onSuccess {
                _successMessage.value = "Demande envoyée ! En attente d'approbation."
            }.onFailure {
                _errorMessage.value = it.localizedMessage ?: "Erreur"
            }
            _isLoading.value = false
        }
    }

    fun approveParticipant(roomId: String, userId: String) {
        viewModelScope.launch {
            val result = firestoreManager.approveParticipant(roomId, userId)
            result.onSuccess {
                refreshRoomParticipants()
            }.onFailure {
                _errorMessage.value = it.localizedMessage ?: "Erreur"
            }
        }
    }

    fun rejectParticipant(roomId: String, userId: String) {
        viewModelScope.launch {
            val result = firestoreManager.rejectParticipant(roomId, userId)
            result.onSuccess {
                refreshRoomParticipants()
            }.onFailure {
                _errorMessage.value = it.localizedMessage ?: "Erreur"
            }
        }
    }

    fun removeParticipant(roomId: String, userId: String) {
        viewModelScope.launch {
            val result = firestoreManager.removeParticipant(roomId, userId)
            result.onSuccess {
                refreshRoomParticipants()
            }.onFailure {
                _errorMessage.value = it.localizedMessage ?: "Erreur"
            }
        }
    }

    fun openRoom(roomId: String) {
        viewModelScope.launch {
            firestoreManager.openRoom(roomId)
        }
    }

    fun closeRoom(roomId: String) {
        viewModelScope.launch {
            firestoreManager.closeRoom(roomId)
        }
    }

    fun deleteRoom(roomId: String) {
        viewModelScope.launch {
            firestoreManager.deleteRoom(roomId)
        }
    }

    fun clearMessages() {
        _errorMessage.value = null
        _successMessage.value = null
    }

    fun clearJoinResult() {
        _joinRoomResult.value = null
    }
}
