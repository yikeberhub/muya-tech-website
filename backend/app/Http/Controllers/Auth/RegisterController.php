<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class RegisterController extends Controller
{
    // register user controller

    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:25',
            'role'=>'required|string|in:user,admin',
            'email'=>'required|string|email|max:255|unique:users',
            'password'=>'required|string|min:8',
        ]);
        if ($validator->fails()){
            return response()->json($validator->errors(),422);
       }
       $user = User::create([
        'name'=>$request->name,
        'role'=>$request->role,
        'email'=>$request->email,
        'password'=>Hash::make($request->password),
       ]);
       return response()->json([
        'user'=>$user,
        'message'=>'User registered successfully!!',
       ],201);

    }

}
