<?php

namespace App\Http\Controllers;

use App\Models\FeaturedProduct;
use Illuminate\Http\Request;

class FeaturedProductController extends Controller
{
    public function index()
    {
        return response()->json(FeaturedProduct::all(), 200);
    }

    public function show($id)
    {
        $product = FeaturedProduct::findOrFail($id);
        return response()->json($product, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'image_url' => 'nullable|string', // image path
        ]);

        $product = FeaturedProduct::create($validated);
        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $product = FeaturedProduct::findOrFail($id);
        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        FeaturedProduct::destroy($id);
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
