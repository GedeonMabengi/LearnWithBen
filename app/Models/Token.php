<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    protected $fillable = [
        'token_type_id',
        'owner_id',
        'code',
        'remaining_uses',
        'expires_at',
        'status',
    ];

    protected $casts = [
        'expires_at' => 'datetime',
    ];

    public function tokenType()
    {
        return $this->belongsTo(TokenType::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function transfers()
    {
        return $this->hasMany(TokenTransfer::class);
    }
}
