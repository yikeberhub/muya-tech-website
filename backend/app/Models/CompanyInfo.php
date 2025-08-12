<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyInfo extends Model
{
    protected $table = 'company_infos';

    protected $fillable = [
        'company_name',
        'logo_url',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'country',
        'postal_code',
        'map_embed_url',
    ];

 
}
