<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'teacher_id',
        'name',
        'description',
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function studentSkills()
    {
        return $this->hasMany(StudentSkill::class);
    }
}
