<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUser($id)
    {
        // Return the authenticated user
        $user = User::find($id);
        if(!$user){
            return response()->json(['message'=>'User not found'],404);
        }
        return response()->json(['user'=>$user],200);

    }

    public function updateUser(Request $request,$userId)
    {
        $user = User::find($userId);
        if (!$user){
            return response()->json(['message'=>'user not found'],404);
        }
        $validated = $request->validate([
            'email'=>'nullable|string|email',
            'password'=>'nullable|string',
            'name'=>'nullable|string',
            'bio'=>'nullable|string',
            'avatar'=>'nullable|image|max:2048',
        ]);
        $user->update($validated);
        
        return response()->json(['message'=>'user updated successfully','user'=>$user],200);

    }

    public function destroyUser($id)
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