<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResourceAccess extends Model
{
    protected $table = 'resource_access';

    protected $fillable = [
        'resource_id',
        'student_id',
    ];

    public function resource()
    {
        return $this->belongsTo(ResourceModel::class, 'resource_id');
    }

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }
}
