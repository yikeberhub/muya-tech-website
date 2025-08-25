<?php

namespace App\Http\Controllers;

use App\Http\Resources\SocialLinkResource;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SocialLinkController extends Controller
{
    // Get all social links
    public function index()
    {
        $socialLinks = SocialLink::all();
        return SocialLinkResource::collection($socialLinks);
    }

    // Get single social link by ID
    public function show($id)
    {
        $socialLink = SocialLink::find($id);
        if (!$socialLink) {
            return response()->json(['message' => 'Social link not found'], 404);
        }
        return new SocialLinkResource($socialLink);
    }

    // Store a new social link
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'platform'   => 'required|string|max:100',
            'url'        => 'required|url',
            'icon_class' => 'nullable|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $socialLink = SocialLink::create($validator->validated());

        return new SocialLinkResource($socialLink);
    }

    // Update a social link
    public function update(Request $request, $id)
    {
        $socialLink = SocialLink::find($id);
        if (!$socialLink) {
            return response()->json(['message' => 'Social link not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'platform'   => 'sometimes|required|string|max:100',
            'url'        => 'sometimes|required|url',
            'icon_class' => 'nullable|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $socialLink->update($validator->validated());

        return new SocialLinkResource($socialLink);
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
