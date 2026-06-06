<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\Contracts\PasskeyUser;
use Laravel\Fortify\PasskeyAuthenticatable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable implements PasskeyUser
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, PasskeyAuthenticatable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'google_id',
        'apple_id',
        'avatar_url',
        'timezone',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    public function tokenTypes()
    {
        return $this->hasMany(TokenType::class, 'teacher_id');
    }

    public function tokens()
    {
        return $this->hasMany(Token::class, 'owner_id');
    }

    public function courses()
    {
        return $this->hasMany(Course::class, 'teacher_id');
    }

    public function courseInvitations()
    {
        return $this->hasMany(CourseInvitation::class, 'student_id');
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class, 'student_id');
    }

    public function resources()
    {
        return $this->hasMany(ResourceModel::class, 'teacher_id');
    }

    public function resourceAccesses()
    {
        return $this->hasMany(ResourceAccess::class, 'student_id');
    }

    public function skills()
    {
        return $this->hasMany(Skill::class, 'teacher_id');
    }

    public function studentSkills()
    {
        return $this->hasMany(StudentSkill::class, 'student_id');
    }

    public function teacherNotes()
    {
        return $this->hasMany(TeacherNote::class, 'student_id');
    }

    public function writtenNotes()
    {
        return $this->hasMany(TeacherNote::class, 'teacher_id');
    }

    public function sentTransfers()
    {
        return $this->hasMany(TokenTransfer::class, 'from_student_id');
    }

    public function receivedTransfers()
    {
        return $this->hasMany(TokenTransfer::class, 'to_student_id');
    }
}
