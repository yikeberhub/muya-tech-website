<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Storage;


class ProjectController extends Controller
{
    //
    protected function index(){
        
    $projects = Project::orderBy('created_at','desc')->get();
    return response()->json(['projects'=>$projects],200);
    }

    protected function show($id){
        $project = Project::find($id);
        if(!$project){
            return response()->json(['message'=>'project not found'],404);
        }
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
            'project' => $project
        ], 201);
    }

    protected function update(Request $request,$id){
      $validator = $request->validate([
        'title' => 'nullable|string',
        'description' => 'nullable|string',
        'image' => 'nullable|image',
        'url' => 'nullable|url',
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

    protected function destroy($id){
     $project = Project::find($id);
     if(!$project){
        return response()->json(['message'=>'project not found'],404);
     }
     $project->delete();
     return response()->json(['message'=>'project deleted successfully'],200);
    }
}
