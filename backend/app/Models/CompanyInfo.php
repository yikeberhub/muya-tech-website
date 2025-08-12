<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyInfo extends Model
{
    protected $table = 'company_infos';

    protected $fillable = [
        'company_name',
        'logo',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'country',
        'postal_code',
        'map_embed_url',
        'social_links',
        'about_us',
    ];

    protected $casts = [
        'social_links' => 'array', // Automatically converts JSON to array
    ];
}
