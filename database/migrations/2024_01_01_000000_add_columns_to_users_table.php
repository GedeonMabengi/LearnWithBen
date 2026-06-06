<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['teacher', 'student'])->default('student')->after('password');
            $table->string('google_id')->nullable()->unique()->after('role');
            $table->string('apple_id')->nullable()->unique()->after('google_id');
            $table->string('avatar_url')->nullable()->after('apple_id');
            $table->string('timezone')->default('UTC')->after('avatar_url');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'role',
                'google_id',
                'apple_id',
                'avatar_url',
                'timezone',
            ]);
        });
    }
};
