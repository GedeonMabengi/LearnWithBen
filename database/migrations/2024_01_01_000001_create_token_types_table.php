<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
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
            $table->unsignedInteger('max_uses')->nullable();
            $table->unsignedInteger('price')->nullable()->comment('in cents');
            $table->string('currency', 3)->default('EUR');
            $table->boolean('is_transferable')->default(false);
            $table->timestamps();

            $table->index(['teacher_id', 'type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('token_types');
    }
};
