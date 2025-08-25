<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeamMemberResource;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TeamController extends Controller
{
    public function index()
    
    {
        $teamMembers = TeamMember::all();
        $teams  = TeamMemberResource::collection($teamMembers);
        return response()->json($teams, 200);
    }

    public function show($id)
    {
        $teamMember = TeamMember::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'Team member not found'], 404);
        }

        return response()->json($teamMember, 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'position'    => 'required|string|max:255',
            'bio'         => 'nullable|string',
            'social_links'=> 'nullable|json',
            'photo_url'   => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('photo_url')) {
            $path = $request->file('photo_url')->store('team_images', 'public');
            $data['photo_url'] = $path;
        }

        $teamMember = TeamMember::create($data);

        return response()->json($teamMember, 201);
    }

    public function update(Request $request, $id)
    {
        $teamMember = TeamMember::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'Team member not found'], 404);
        }

        $data = $request->validate([
            'name'        => 'sometimes|string|max:255',
            'position'    => 'sometimes|string|max:255',
            'bio'         => 'nullable|string',
            'social_links'=> 'nullable|json',
            'photo_url'   => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('photo_url')) {
            if ($teamMember->photo_url) {
                Storage::disk('public')->delete($teamMember->photo_url);
            }
            $path = $request->file('photo_url')->store('team_images', 'public');
            $data['photo_url'] = $path;
        }

        $teamMember->update($data);

        return response()->json($teamMember, 200);
    }

    // Delete a team member
    public function destroy($id)
    {
        $teamMember = TeamMember::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'Team member not found'], 404);
        }

        if ($teamMember->photo_url) {
            Storage::disk('public')->delete($teamMember->photo_url);
        }

        $teamMember->delete();

        return response()->json(['message' => 'Team member deleted successfully'], 200);
    }
}
