<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use GuzzleHttp\Psr7\Response;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
class UserController extends Controller

{
    public function index(){
        $users = User::all();
        $users = UserResource::collection($users);
        return response()->json(['users'=>$users],200);
    }
    
    public function show($id)
    {
        // Return the authenticated user
        $user = User::find($id);
        if(!$user){
            return response()->json(['message'=>'User not found'],404);
        }
        return response()->json(['user'=>$user],200);

    }

    public function update(Request $request,$userId)
    {
        $user = User::find($userId);
        if (!$user){
            return response()->json(['message'=>'user not found'],404);
        }
        $validated = $request->validate([
            'email'=>'nullable|string|email',
            'password'=>'nullable|string',
            'name'=>'nullable|string',
            'role'=>'nullable|string|in:admin,user',
            'phone_number'=>'nullable|string|max:12',
            'bio'=>'nullable|string',
            'profile_image'=>'nullable|image|max:2048',
        ]);
        Log::info('validated data',$validated);
        if($request->hasFile('profile_image')){
            if ($user->profile_image){
            Storage::disk('public')->delete($user->profile_image);
            }
            $path = $request->file('profile_image')->store('profile_images','public');
            $validated['profile_image'] = $path;
        }
        $user->fill($validated);
        $user->save();
        
        return response()->json(['message'=>'user updated successfully','user'=>$user],200);

    }
    public function store(Request $request) // <-- You must include Request
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'nullable|string|max:20',
            'role' => 'nullable|string|in:User,Admin',
            'bio' => 'nullable|string',
            'password'=>'required|string|min:6',
            'profile_image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone_number = $request->phone_number ?? null;
        $user->role = $request->role ?? 'User';
        $user->bio = $request->bio ?? null;

        if ($request->hasFile('profile_image')) {
            $path = $request->file('profile_image')->store('profile_images', 'public');
            $user->profile_image = $path;
        }

        $user->password = Hash::make($request->password);

        $user->save();

        return new UserResource($user);
    }

    public function destroy($id)
    {
        // Delete the authenticated user's account
        $user = User::find($id);
        if(!$user){
            return response()->json(['message'=>'user not found'],404);
        }

        $user->delete();

        return response()->json(['message'=>'user deleted successfully!']);
    }
}