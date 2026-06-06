<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResourceModel extends Model
{
    protected $table = 'resources';

    protected $fillable = [
        'teacher_id',
        'title',
        'description',
        'file_path',
        'visibility',
        'token_type_id',
        'access_code',
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function tokenType()
    {
        return $this->belongsTo(TokenType::class, 'token_type_id');
    }

    public function accesses()
    {
        return $this->hasMany(ResourceAccess::class, 'resource_id');
    }
}
