<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TokenTransfer extends Model
{
    protected $fillable = [
        'token_id',
        'from_student_id',
        'to_student_id',
        'transferred_at',
    ];

    protected $casts = [
        'transferred_at' => 'datetime',
    ];

    public function token()
    {
        return $this->belongsTo(Token::class);
    }

    public function fromStudent()
    {
        return $this->belongsTo(User::class, 'from_student_id');
    }

    public function toStudent()
    {
        return $this->belongsTo(User::class, 'to_student_id');
    }
}
