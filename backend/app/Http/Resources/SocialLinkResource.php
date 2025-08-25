<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SocialLinkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'        => $this->id,
            'platform'  => $this->platform,
            'url'       => $this->url,
            'icon'      => $this->icon_class,      
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at,
        ];
    }
}
