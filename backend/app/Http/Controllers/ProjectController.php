<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Storage;


class ProjectController extends Controller
{
    //
    protected function getProjects(){
        
    $projects = Project::orderBy('created_at','desc')->get();
    return response()->json(['projects'=>$projects],200);
    }

    protected function projectDetail($id){
        $project = Project::find($id);
        if(!$project){
            return response()->json(['message'=>'project not found'],404);
        }
        return response()->json(['project'=>$project],200);
    }

    
    protected function createProject(Request $request)
    {
        // Validate incoming request data
        $validator = $request->validate([
            'title' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|image',
            'link' => 'nullable|url',
        ]);

        // Handle image upload if present
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('project_images', 'public');
        }

        // Create and save the new project
        $project = new Project();
        $project->title = $request->input('title', ''); // Default to empty string if not provided
        $project->description = $request->input('description', '');
        $project->image = $imagePath; // Store the image path in the database
        $project->link = $request->input('link', ''); // Default to empty string if not provided
        $project->save();

        // Return a success response with the created project
        return response()->json([
            'message' => 'Project created successfully',
            'project' => $project
        ], 201);
    }

    protected function updateProject(Request $request,$id){
      $validator = $request->validate([
        'title' => 'nullable|string',
        'description' => 'nullable|string',
        'image' => 'nullable|image',
        'link' => 'nullable|url',
    ]);
    $imagePath = null;
    if($request->hasFile('image')){
        $imagePath = $request->file('image')->store('project_images','public');
    }
    $project = Project::find($id);
    if(!$project){
        return response()->json(['message'=>'project not found'],404);

    }
    $project->update($validator);
    return response()->json(['message'=>'project updated successfully'],200);
    }

    protected function deleteProject($id){
     $project = Project::find($id);
     if(!$project){
        return response()->json(['message'=>'project not found'],404);
     }
     $project->delete();
     return response()->json(['message'=>'project deleted successfully'],200);
    }
}
