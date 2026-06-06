<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
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
            $table->unsignedInteger('max_participants')->nullable();
            $table->enum('visibility', ['public', 'private', 'invite_only', 'token_gated'])->default('private');
            $table->foreignId('token_type_id')->nullable()->constrained('token_types')->nullOnDelete();
            $table->string('access_code')->nullable()->unique();
            $table->boolean('is_recurring')->default(false);
            $table->foreignId('parent_course_id')->nullable()->constrained('courses')->nullOnDelete();
            $table->timestamps();

            $table->index(['teacher_id', 'start_time']);
            $table->index(['visibility', 'start_time']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
