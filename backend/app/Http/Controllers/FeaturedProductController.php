<?php

namespace App\Http\Controllers;

use App\Models\FeaturedProduct;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Storage;

class FeaturedProductController extends Controller
{
    public function index()
    {
        return response()->json(['products'=>ProductResource::collection(FeaturedProduct::all())],200);
    }

    public function show($id)
    {
        $product = FeaturedProduct::findOrFail($id);
        return new ProductResource($product);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'product_url'=>'nullable|url',
            'image' => 'nullable|image|max:2048',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('product_images', 'public');
            $validated['image_url'] = $path;
        }

        $product = FeaturedProduct::create($validated);

        return new ProductResource($product);
    }

    public function update(Request $request, $id)
    {
        $product = FeaturedProduct::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'product_url'=>'nullable|url',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete('product_images/' . $product->image);
            }
            $path = $request->file('image')->store('product_images', 'public');
            $validated['image'] = $path;
        }

        $product->update($validated);

        return new ProductResource($product);
    }

    public function destroy($id)
    {
        $product = FeaturedProduct::findOrFail($id);

        // Delete image from storage
        if ($product->image) {
            Storage::disk('public')->delete('product_images/' . $product->image);
        }

        $product->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
