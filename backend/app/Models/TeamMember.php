<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;
    protected $casts = [
        'social_links' => 'array',
    ];
    protected $fillable = [
        'name',
        'position',
        'photo_url',
        'bio',
        'social_links',
    ];
}
