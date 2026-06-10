# EngTeacher - Application de Visioconférence pour Cours d'Anglais

## Description

EngTeacher est une application Android MVP permettant à un professeur d'anglais d'enseigner à distance via visioconférence. L'application inclut :

- **Authentification** : Inscription/connexion avec Firebase Auth
- **Gestion des rôles** : Le professeur est admin, les étudiants doivent être approuvés
- **Salles de cours** : Création et gestion de salles avec codes d'accès
- **Visioconférence** : Intégration Jitsi Meet pour les appels vidéo
- **Contrôle d'accès** : Le professeur gère qui peut rejoindre les cours

## Prérequis

- JDK 17 ou supérieur
- Android SDK (API 24 minimum, API 34 cible)
- Gradle 8.5+ (wrapper inclus)
- Un projet Firebase configuré

## Structure du Projet

```
engteacher/
├── gradlew / gradlew.bat          # Scripts Gradle Wrapper
├── gradle/wrapper/                # Configuration Gradle Wrapper
├── settings.gradle.kts            # Configuration des modules
├── build.gradle.kts               # Configuration racine
├── gradle.properties              # Propriétés Gradle
└── app/
    ├── build.gradle.kts           # Dépendances et configuration
    ├── google-services.json       # Configuration Firebase (À REMPLACER)
    ├── proguard-rules.pro         # Règles ProGuard
    └── src/main/
        ├── AndroidManifest.xml    # Manifeste Android
        ├── java/com/engteacher/app/
        │   ├── EngTeacherApplication.kt   # Classe Application
        │   ├── MainActivity.kt            # Activité principale
        │   ├── model/
        │   │   ├── User.kt               # Modèle utilisateur
        │   │   └── Room.kt               # Modèle salle
        │   ├── data/
        │   │   ├── FirebaseAuthManager.kt # Auth Firebase
        │   │   └── FirestoreManager.kt    # Gestion Firestore
        │   ├── viewmodel/
        │   │   ├── AuthViewModel.kt      # ViewModel auth
        │   │   └── RoomViewModel.kt      # ViewModel salles
        │   ├── ui/
        │   │   ├── screens/
        │   │   │   ├── LoginScreen.kt           # Écran connexion
        │   │   │   ├── AdminDashboardScreen.kt  # Dashboard prof
        │   │   │   ├── StudentDashboardScreen.kt# Dashboard étudiant
        │   │   │   ├── RoomDetailScreen.kt      # Détail salle
        │   │   │   └── VisioScreen.kt           # Visioconférence
        │   │   ├── navigation/
        │   │   │   ├── Screen.kt         # Routes
        │   │   │   └── NavGraph.kt       # Navigation
        │   │   └── theme/
        │   │       ├── Color.kt          # Couleurs
        │   │       ├── Theme.kt          # Thème
        │   │       └── Type.kt           # Typographie
        │   └── res/
        │       ├── values/
        │       │   ├── strings.xml       # Chaînes
        │       │   ├── colors.xml        # Couleurs
               │   │   ├── themes.xml        # Thèmes
        │       │   └── ...
        │       └── xml/
        │           ├── backup_rules.xml
        │           └── data_extraction_rules.xml
```

## Configuration Firebase (OBLIGATOIRE)

### 1. Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un nouveau projet
3. Ajoutez une application Android
4. Le nom du package est : `com.engteacher.app`
5. Téléchargez le fichier `google-services.json`
6. Remplacez le fichier `app/google-services.json` du projet

### 2. Activer les services Firebase

Dans la console Firebase, activez :
- **Authentication** : Activez l'authentification par Email/Mot de passe
- **Cloud Firestore** : Créez une base de données en mode production

### 3. Règles Firestore

Dans Firestore Database > Règles, configurez :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    match /rooms/{roomId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null 
        && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "ADMIN";
    }
  }
}
```

## Compilation en Ligne de Commande

### Sous Windows (CMD)

```cmd
cd engteacher
gradlew.bat assembleDebug
```

### Sous Linux/Mac (Terminal)

```bash
cd engteacher
./gradlew assembleDebug
```

### Commandes utiles

```bash
# Compiler le projet (debug)
./gradlew assembleDebug

# Compiler le projet (release)
./gradlew assembleRelease

# Nettoyer le projet
./gradlew clean

# Compiler et installer sur un appareil connecté
./gradlew installDebug

# Lancer les tests
./gradlew test
```

## Installation

Le APK compilé se trouve dans :
```
app/build/outputs/apk/debug/app-debug.apk
```

Installez-le sur votre appareil Android :
```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Fonctionnement

### Premier lancement - Création du compte Professeur

1. Ouvrez l'application
2. Cliquez sur l'onglet **"Admin"**
3. Créez le compte administrateur (premier compte = professeur)
4. Connectez-vous avec ces identifiants

### Les Étudiants

1. Téléchargent l'application
2. S'inscrivent via l'onglet **"Inscription"**
3. Leur compte est en attente d'approbation
4. Le professeur approuve les étudiants depuis son dashboard
5. Les étudiants peuvent rejoindre les salles avec un code d'accès

### Création d'un cours

1. Le professeur crée une salle depuis son dashboard
2. Un code d'accès unique est généré
3. Le professeur partage ce code avec les étudiants
4. Les étudiants rejoignent la salle avec le code
5. Le professeur démarre la visioconférence

## Technologies Utilisées

- **Kotlin** : Langage principal
- **Jetpack Compose** : UI déclarative
- **Navigation Compose** : Gestion de la navigation
- **Firebase Authentication** : Authentification
- **Cloud Firestore** : Base de données NoSQL
- **Jitsi Meet SDK** : Visioconférence
- **Material Design 3** : Composants UI
- **Coroutines** : Programmation asynchrone
- **StateFlow** : Gestion réactive de l'état

## Permissions Requises

- `INTERNET` : Connexion réseau
- `CAMERA` : Visioconférence
- `RECORD_AUDIO` : Visioconférence
- `BLUETOOTH` : Casque Bluetooth

## Notes

- La visioconférence utilise les serveurs publics Jitsi (meet.jit.si)
- Pour une utilisation en production, envisagez d'héberger votre propre serveur Jitsi
- Les appels sont chiffrés de bout en bout
- Aucune donnée n'est stockée sur les serveurs Jitsi

## Licence

Ce projet est un MVP éducatif. Libre à vous de le modifier et l'améliorer.
