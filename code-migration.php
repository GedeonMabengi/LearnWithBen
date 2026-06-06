<?php

/**
 * Script pour remplir ou créer automatiquement les fichiers de migration Laravel.
 * - Détecte les fichiers existants dans `database/migrations/`.
 * - Associe chaque bloc de contenu au fichier correspondant.
 * - Met à jour les fichiers existants ou les crée s'ils n'existent pas.
 */

// Chemin du dossier des migrations
$migrationsDir = 'database/migrations/';

// Vérifier que le dossier existe, sinon le créer
if (!is_dir($migrationsDir)) {
    if (!mkdir($migrationsDir, 0755, true)) {
        die("Erreur : Impossible de créer le dossier '$migrationsDir'.\n");
    }
    echo "Dossier '$migrationsDir' créé.\n";
}

// Contenu brut des fichiers (à copier-coller ici)
$rawContent = "===FILE: database/migrations/2024_01_01_000000_add_columns_to_users_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['teacher', 'student'])->default('student');
            $table->string('google_id')->nullable();
            $table->string('apple_id')->nullable();
            $table->string('avatar_url')->nullable();
            $table->string('timezone')->default('UTC');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'google_id', 'apple_id', 'avatar_url', 'timezone']);
        });
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000001_create_token_types_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('token_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->enum('type', ['single', 'pack', 'series', 'subscription']);
            $table->enum('validity_type', ['date_range', 'usage_count', 'both'])->default('date_range');
            $table->timestamp('valid_from')->nullable();
            $table->timestamp('valid_until')->nullable();
            $table->integer('max_uses')->nullable();
            $table->unsignedInteger('price')->nullable()->comment('in cents');
            $table->string('currency', 3)->default('EUR');
            $table->boolean('is_transferable')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('token_types');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000002_create_tokens_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('token_type_id')->constrained('token_types')->cascadeOnDelete();
            $table->foreignId('owner_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('code')->unique();
            $table->integer('remaining_uses')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->enum('status', ['active', 'used', 'expired', 'revoked'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tokens');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000003_create_courses_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->timestamp('start_time');
            $table->timestamp('end_time');
            $table->string('timezone')->default('UTC');
            $table->integer('max_participants')->nullable();
            $table->enum('visibility', ['public', 'private', 'invite_only', 'token_gated']);
            $table->foreignId('token_type_id')->nullable()->constrained('token_types')->nullOnDelete();
            $table->string('access_code')->nullable()->unique();
            $table->boolean('is_recurring')->default(false);
            $table->foreignId('parent_course_id')->nullable()->constrained('courses')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000004_create_course_invitations_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('course_invitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('courses')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_invitations');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000005_create_enrollments_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('courses')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('token_id')->nullable()->constrained('tokens')->nullOnDelete();
            $table->enum('status', ['registered', 'attended', 'cancelled', 'no_show'])->default('registered');
            $table->timestamp('registered_at')->useCurrent();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrollments');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000006_create_resources_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('file_path');
            $table->enum('visibility', ['public', 'private', 'invite_only', 'token_gated']);
            $table->foreignId('token_type_id')->nullable()->constrained('token_types')->nullOnDelete();
            $table->string('access_code')->nullable()->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000007_create_resource_access_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resource_access', function (Blueprint $table) {
            $table->id();
            $table->foreignId('resource_id')->constrained('resources')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resource_access');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000008_create_recordings_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recordings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('courses')->cascadeOnDelete();
            $table->string('file_url');
            $table->integer('duration')->nullable()->comment('in seconds');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recordings');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000009_create_skills_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skills');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000010_create_student_skills_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_skills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('skill_id')->constrained('skills')->cascadeOnDelete();
            $table->foreignId('validated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('validated_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_skills');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000011_create_teacher_notes_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teacher_notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('course_id')->nullable()->constrained('courses')->nullOnDelete();
            $table->text('note');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacher_notes');
    }
};
===END FILE===

===FILE: database/migrations/2024_01_01_000012_create_token_transfers_table.php===
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('token_transfers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('token_id')->constrained('tokens')->cascadeOnDelete();
            $table->foreignId('from_student_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('to_student_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('transferred_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('token_transfers');
    }
};
===END FILE===";

// Extraire les blocs de contenu et leurs noms de fichier
$contentBlocks = [];
$currentFile = null;
$lines = explode("\n", $rawContent);

foreach ($lines as $line) {
    if (strpos($line, '===FILE:') === 0) {
        $currentFile = trim(str_replace('===FILE:', '', $line));
        $contentBlocks[$currentFile] = '';
    } elseif (strpos($line, '===END FILE===') === 0) {
        $currentFile = null;
    } elseif ($currentFile !== null) {
        $contentBlocks[$currentFile] .= $line . "\n";
    }
}

// Traiter chaque bloc de contenu
$updatedCount = 0;
$createdCount = 0;

foreach ($contentBlocks as $filePath => $content) {
    // Extraire le nom du fichier à partir du chemin complet
    $filename = basename($filePath);
    $targetFile = $migrationsDir . $filename;

    // Vérifier si le fichier existe
    if (file_exists($targetFile)) {
        // Mettre à jour le fichier existant
        if (file_put_contents($targetFile, $content) !== false) {
            echo "✅ Fichier '$filename' mis à jour avec succès.\n";
            $updatedCount++;
        } else {
            echo "❌ Erreur : Impossible d'écrire dans le fichier '$filename'.\n";
        }
    } else {
        // Créer le fichier s'il n'existe pas
        if (file_put_contents($targetFile, $content) !== false) {
            echo "🆕 Fichier '$filename' créé avec succès.\n";
            $createdCount++;
        } else {
            echo "❌ Erreur : Impossible de créer le fichier '$filename'.\n";
        }
    }
}

echo "Traitement terminé. $updatedCount fichier(s) mis à jour, $createdCount fichier(s) créé(s).\n";