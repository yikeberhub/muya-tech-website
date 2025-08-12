<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'headline',
        'subHeading',
        'button_text',
        'button_link',
        'hero_image_url',
    ];
}
