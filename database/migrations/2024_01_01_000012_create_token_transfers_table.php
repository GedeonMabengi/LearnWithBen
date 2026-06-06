<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('token_transfers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('token_id')->constrained('tokens')->cascadeOnDelete();
            $table->foreignId('from_student_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('to_student_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('transferred_at')->useCurrent();
            $table->timestamps();

            $table->index(['from_student_id', 'to_student_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('token_transfers');
    }
};
