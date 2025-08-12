<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    // Fetch all team members
    public function index()
    {
        return response()->json(TeamMember::all(), 200);
    }

    // Fetch single team member
    public function show($id)
    {
        $teamMember = TeamMember::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'Team member not found'], 404);
        }

        return response()->json($teamMember, 200);
    }

    // Create a new team member
    public function store(Request $request)
    {
        $request->validate([
            'name'        => 'required|string|max:255',
            'role'        => 'required|string|max:255',
            'bio'         => 'nullable|string',
            'image_url'   => 'nullable|string',
        ]);

        $teamMember = TeamMember::create($request->all());

        return response()->json($teamMember, 201);
    }

    // Update a team member
    public function update(Request $request, $id)
    {
        $teamMember = TeamMember::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'Team member not found'], 404);
        }

        $teamMember->update($request->all());

        return response()->json($teamMember, 200);
    }

    // Delete a team member
    public function destroy($id)
    {
        $teamMember = TeamMember::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'Team member not found'], 404);
        }

        $teamMember->delete();

        return response()->json(['message' => 'Team member deleted successfully'], 200);
    }
}
