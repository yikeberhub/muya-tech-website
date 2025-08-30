<?php

namespace App\Http\Controllers;

use App\Http\Resources\TestimonialResource;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    // Get all testimonials
    public function index()
    {
        $testimonials = Testimonial::all();
        $testimonials = TestimonialResource::collection($testimonials);
        return response()->json(['testimonials' => $testimonials], 200);
    }

    // Get single testimonial by ID
    public function show($id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }
        return new TestimonialResource($testimonial);
    }

    // Store a new testimonial
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'message'  => 'required|string',
            'position' => 'nullable|string',
            'company'  => 'nullable|string',
            'rating'   => 'nullable|numeric',
            'image'    => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('testimonial_images', 'public');
            $validated['image_url'] = $path;
        }

        $testimonial = Testimonial::create($validated);

        return new TestimonialResource($testimonial);
    }

    // Update a testimonial
    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'message'  => 'required|string',
            'position' => 'nullable|string',
            'company'  => 'nullable|string',
            'rating'   => 'nullable|numeric',
            'image'    => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($testimonial->image_url) {
                Storage::disk('public')->delete($testimonial->image_url);
            }
            $path = $request->file('image')->store('testimonial_images', 'public');
            $validated['image_url'] = $path;
        }

        $testimonial->update($validated);

        return new TestimonialResource($testimonial);
    }

    // Delete a testimonial
    public function destroy($id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        if ($testimonial->image_url) {
            Storage::disk('public')->delete($testimonial->image_url);
        }

        $testimonial->delete();

        return response()->json(['message' => 'Testimonial deleted successfully'], 200);
    }
}
