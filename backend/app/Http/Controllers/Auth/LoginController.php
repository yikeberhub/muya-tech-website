<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'=>'required|string|email',
            'password'=>'required|string',
        ]);

        if (Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
            $user = Auth::user();
            
            return response()->json([
                'user'=>$user,
                'message'=>'Login successfull1!',
            ],200);
        }
        return response()->json([
            'message'=>'Invalid credential',
        ],401);
    }
}