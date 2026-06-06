<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'teacher_id',
        'title',
        'description',
        'start_time',
        'end_time',
        'timezone',
        'max_participants',
        'visibility',
        'token_type_id',
        'access_code',
        'is_recurring',
        'parent_course_id',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'is_recurring' => 'boolean',
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function tokenType()
    {
        return $this->belongsTo(TokenType::class, 'token_type_id');
    }

    public function invitations()
    {
        return $this->hasMany(CourseInvitation::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function recordings()
    {
        return $this->hasMany(Recording::class);
    }

    public function parentCourse()
    {
        return $this->belongsTo(Course::class, 'parent_course_id');
    }

    public function childCourses()
    {
        return $this->hasMany(Course::class, 'parent_course_id');
    }
}
