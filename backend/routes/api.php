<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register',[RegisterController::class,'register']);
Route::post('/login',[LoginController::class,'login']);

Route::get('/user/{id}',[UserController::class,'getUser']);
Route::put('/user/{id}/update',[UserController::class,'updateUser']);
Route::delete('/user/{id}delete',[UserController::class,'destroyUser']);

Route::get('projects/',[ProjectController::class,'getProjects']);
Route::get('projects/{id}',[ProjectController::class,'projectDetail']);
Route::put('project/{id}/update',[ProjectController::class,'updateProject']);
Route::delete('project/{id}/delete',[ProjectController::class,'deleteProject']);
Route::post('project/create',[ProjectController::class,'createProject']);


