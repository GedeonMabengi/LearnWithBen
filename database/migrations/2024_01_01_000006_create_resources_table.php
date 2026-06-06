<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('file_path');
            $table->enum('visibility', ['public', 'private', 'invite_only', 'token_gated'])->default('private');
            $table->foreignId('token_type_id')->nullable()->constrained('token_types')->nullOnDelete();
            $table->string('access_code')->nullable()->unique();
            $table->timestamps();

            $table->index(['teacher_id', 'visibility']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
