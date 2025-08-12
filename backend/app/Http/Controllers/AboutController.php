<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    // Fetch all about sections
    public function index()
    {
        return response()->json(About::all(), 200);
    }

    // Fetch single about section
    public function show($id)
    {
        $about = About::find($id);

        if (!$about) {
            return response()->json(['message' => 'About section not found'], 404);
        }

        return response()->json($about, 200);
    }

    // Create a new about section
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'image_url'   => 'nullable|string',
        ]);

        $about = About::create($request->all());

        return response()->json($about, 201);
    }

    // Update about section
    public function update(Request $request, $id)
    {
        $about = About::find($id);

        if (!$about) {
            return response()->json(['message' => 'About section not found'], 404);
        }

        $about->update($request->all());

        return response()->json($about, 200);
    }

    // Delete about section
    public function destroy($id)
    {
        $about = About::find($id);

        if (!$about) {
            return response()->json(['message' => 'About section not found'], 404);
        }

        $about->delete();

        return response()->json(['message' => 'About section deleted successfully'], 200);
    }
}
