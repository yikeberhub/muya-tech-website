<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id'             => $this->id,
            'name'           => $this->name,
            'email'          => $this->email,
            'phone_number'   => $this->phone_number,
            'role'           => $this->role ?? 'User', // default role if null
            'bio'            => $this->bio,
            'profile_image'  => $this->profile_image 
                ? asset('storage/' . $this->profile_image) 
                : null,
            'created_at'     => $this->created_at ? $this->created_at->toDateTimeString() : null,
            'updated_at'     => $this->updated_at ? $this->updated_at->toDateTimeString() : null,
        ];
    }
}
