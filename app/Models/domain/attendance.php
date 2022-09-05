<?php

namespace App\Models\domain;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class attendance extends Model
{
    use HasFactory;
    protected $table = 'attendance';
    protected $fillable = [
        'Name',
        'checkin',
        'checkout',
    ];

}
