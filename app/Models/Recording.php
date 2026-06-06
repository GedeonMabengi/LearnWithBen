<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recording extends Model
{
    protected $fillable = [
        'course_id',
        'file_url',
        'duration',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
