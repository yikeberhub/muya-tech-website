<?php

namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\Request;

class SocialLinkController extends Controller
{
    // Get all social links
    public function index()
    {
        return response()->json(SocialLink::all(), 200);
    }

    // Get single social link by ID
    public function show($id)
    {
        $socialLink = SocialLink::find($id);
        if (!$socialLink) {
            return response()->json(['message' => 'Social link not found'], 404);
        }
        return response()->json($socialLink, 200);
    }

    // Store a new social link
    public function store(Request $request)
    {
        $request->validate([
            'platform' => 'required|string|max:100',
            'url'      => 'required|url',
            'icon'     => 'nullable|string',
        ]);

        $socialLink = SocialLink::create($request->all());
        return response()->json($socialLink, 201);
    }

    // Update a social link
    public function update(Request $request, $id)
    {
        $socialLink = SocialLink::find($id);
        if (!$socialLink) {
            return response()->json(['message' => 'Social link not found'], 404);
        }

        $socialLink->update($request->all());
        return response()->json($socialLink, 200);
    }

    // Delete a social link
    public function destroy($id)
    {
        $socialLink = SocialLink::find($id);
        if (!$socialLink) {
            return response()->json(['message' => 'Social link not found'], 404);
        }

        $socialLink->delete();
        return response()->json(['message' => 'Social link deleted successfully'], 200);
    }
}
