<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\CompanyInfoController;

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/
Route::prefix('auth')->group(function () {
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/login', [LoginController::class, 'login']);
});

/*
|--------------------------------------------------------------------------
| User Management Routes
|--------------------------------------------------------------------------
*/
Route::prefix('users')->group(function () {
    Route::get('/}', [UserController::class, 'index']);         // Fetch users
    Route::get('/{id}', [UserController::class, 'show']);         // Fetch single user
    Route::put('/{id}', [UserController::class, 'updateUser']);      // Update user
    Route::delete('/{id}', [UserController::class, 'destroyUser']);  // Delete user
});

/*
|--------------------------------------------------------------------------
| Project Management Routes
|--------------------------------------------------------------------------
*/
Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index']);            // List all projects
    Route::get('/{id}', [ProjectController::class, 'show']);         // Fetch single project
    Route::post('/', [ProjectController::class, 'store']);           // Create project
    Route::put('/{id}', [ProjectController::class, 'update']);       // Update project
    Route::delete('/{id}', [ProjectController::class, 'destroy']);   // Delete project
});

/*
|--------------------------------------------------------------------------
| Company Information Routes
|--------------------------------------------------------------------------
*/
Route::prefix('company-info')->group(function () {
    Route::get('/', [CompanyInfoController::class, 'index']);        // List all company info
    Route::get('/{id}', [CompanyInfoController::class, 'show']);     // Fetch specific company info
    Route::post('/', [CompanyInfoController::class, 'store']);       // Create company info
    Route::put('/{id}', [CompanyInfoController::class, 'update']);   // Update company info
    Route::delete('/{id}', [CompanyInfoController::class, 'destroy']); // Delete company info
});
