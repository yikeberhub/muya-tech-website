<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => (float)$this->price,
            'product_url'=>$this->product_url,
            'image' => $this->image_url ? url(Storage::url($this->image_url)) : null,            
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
