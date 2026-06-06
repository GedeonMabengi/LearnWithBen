<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TokenType extends Model
{
    protected $fillable = [
        'teacher_id',
        'name',
        'type',
        'validity_type',
        'valid_from',
        'valid_until',
        'max_uses',
        'price',
        'currency',
        'is_transferable',
    ];

    protected $casts = [
        'valid_from' => 'datetime',
        'valid_until' => 'datetime',
        'is_transferable' => 'boolean',
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function tokens()
    {
        return $this->hasMany(Token::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class, 'token_type_id');
    }

    public function resources()
    {
        return $this->hasMany(ResourceModel::class, 'token_type_id');
    }
}
