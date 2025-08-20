<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;



class ProjectController extends Controller
{
    //
    protected function index(){
        
    $projects = Project::orderBy('created_at','desc')->get();
    $projects = ProjectResource::collection($projects);
    return response()->json(['projects'=>$projects],200);
    }

    protected function show($id){
        $project = Project::find($id);
        if(!$project){
            return response()->json(['message'=>'project not found'],404);
        }
        $project = new ProjectResource($project);
        return response()->json(['project'=>$project],200);
    }

    
    protected function store(Request $request)
    {
        // Validate incoming request data
        $validator = $request->validate([
            'title' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|image',
            'url' => 'nullable|url',
        ]);

        // Handle image upload if present
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('project_images', 'public');
        }

        $project = new Project();
        $project->title = $request->input('title', '');
        $project->description = $request->input('description', '');
        $project->image = $imagePath;
        $project->url = $request->input('url', '');
        $project->save();

        return response()->json([
            'message' => 'Project created successfully',
            'project' => new ProjectResource($project)
        ], 201);
    }
   
    protected function update(Request $request, $id)
    {
        $project = Project::find($id);
        if (!$project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        $data = $request->validate([
            'title' => 'nullable|string', 
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'nullable|url',
        ]);

        Log::info('Incoming request data for project update:', $request->all());

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($project->image) {
                if (Storage::disk('public')->exists($project->image)) {
                    Storage::disk('public/project_images')->delete($project->image);
                    Log::info('Deleted old image: ' . $project->image);
                } else {
                    Log::warning('Old image not found on disk: ' . $project->image);
                }
            }

            // Store the new image
            $imagePath = $request->file('image')->store('project_images', 'public');
            $data['image'] = $imagePath;
            Log::info('New image stored: ' . $imagePath);
        } else {
            // If no new image is uploaded, ensure the existing image path is retained
            // unless there's a specific instruction to clear it.
            // Laravel's update method will only update the fields present in $data.
            // So if 'image' is not in $data, the old image path will remain untouched.
            Log::info('No new image file uploaded. Retaining existing image path.');
        }

        // Update the project with the validated data
        $project->update($data);

        // Fetch the fresh model data after update to include any changes
        return response()->json([
            'message' => 'Project updated successfully',
            'project' => new ProjectResource($project->fresh()),
        ], 200);
    }
    protected function destroy($id){
     $project = Project::find($id);
     if(!$project){
        return response()->json(['message'=>'project not found'],404);
     }
     $project->delete();
     return response()->json(['message'=>'project deleted successfully'],200);
    }
}
