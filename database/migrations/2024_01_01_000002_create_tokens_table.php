<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('token_type_id')->constrained('token_types')->cascadeOnDelete();
            $table->foreignId('owner_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('code')->unique();
            $table->unsignedInteger('remaining_uses')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->enum('status', ['active', 'used', 'expired', 'revoked'])->default('active');
            $table->timestamps();

            $table->index(['owner_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tokens');
    }
};
