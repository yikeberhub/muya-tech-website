<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth Controllers
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

// Main Controllers
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\CompanyInfoController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\FeaturedProductController;
use App\Http\Controllers\HeroSectionController;
use App\Http\Controllers\SocialLinkController;
use App\Http\Controllers\TestimonialController;

// =========================
// Authentication Routes
// =========================
Route::prefix('auth')->group(function () {
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/login', [LoginController::class, 'login']);
});

Route::middleware('auth:sanctum')->get('/user/profile', [UserController::class, 'profile']);


// =========================
// User Routes
// =========================
Route::middleware('auth:sanctum')->prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::post('/', [UserController::class, 'store']);
    Route::get('/{id}', [UserController::class, 'show']);
    Route::put('/{id}', [UserController::class, 'update']);
    Route::delete('/{id}', [UserController::class, 'destroy']);
});

// =========================
// Project Routes
// =========================
Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index']);
    Route::get('/{id}', [ProjectController::class, 'show']);
    Route::middleware('auth:sanctum')->post('/', [ProjectController::class, 'store']);
    Route::put('/{id}', [ProjectController::class, 'update']);
    Route::delete('/{id}', [ProjectController::class, 'destroy']);
});

// =========================
// Company Info
// =========================
Route::prefix('company-info')->group(function () {
    Route::get('/', [CompanyInfoController::class, 'index']);
    Route::get('/{id}', [CompanyInfoController::class, 'show']);
    Route::post('/', [CompanyInfoController::class, 'store']);
    Route::put('/{id}', [CompanyInfoController::class, 'update']);
    Route::delete('/{id}', [CompanyInfoController::class, 'destroy']);
});

// =========================
// Team
// =========================
Route::prefix('team-members')->group(function () {
    Route::get('/', [TeamController::class, 'index']);
    Route::get('/{id}', [TeamController::class, 'show']);
    Route::post('/', [TeamController::class, 'store']);
    Route::put('/{id}', [TeamController::class, 'update']);
    Route::delete('/{id}', [TeamController::class, 'destroy']);
});

// =========================
// About
// =========================
Route::prefix('about')->group(function () {
    Route::get('/', [AboutController::class, 'index']);
    Route::get('/{id}', [AboutController::class, 'show']);
    Route::post('/', [AboutController::class, 'store']);
    Route::put('/{id}', [AboutController::class, 'update']);
    Route::delete('/{id}', [AboutController::class, 'destroy']);
});

// =========================
// Services
// =========================
Route::prefix('services')->group(function () {
    Route::get('/', [ServiceController::class, 'index']);
    Route::get('/{id}', [ServiceController::class, 'show']);
    Route::post('/', [ServiceController::class, 'store']);
    Route::put('/{id}', [ServiceController::class, 'update']);
    Route::delete('/{id}', [ServiceController::class, 'destroy']);
});

// =========================
// Featured Products
// =========================
Route::prefix('products')->group(function () {
    Route::get('/', [FeaturedProductController::class, 'index']);
    Route::get('/{id}', [FeaturedProductController::class, 'show']);
    Route::post('/', [FeaturedProductController::class, 'store']);
    Route::put('/{id}', [FeaturedProductController::class, 'update']);
    Route::delete('/{id}', [FeaturedProductController::class, 'destroy']);
});

// =========================
// Hero Section
// =========================
Route::prefix('hero-section')->group(function () {
    Route::get('/', [HeroSectionController::class, 'index']);
    Route::get('/{id}', [HeroSectionController::class, 'show']);
    Route::post('/', [HeroSectionController::class, 'store']);
    Route::put('/{id}', [HeroSectionController::class, 'update']);
    Route::delete('/{id}', [HeroSectionController::class, 'destroy']);
});

// =========================
// Social Links
// =========================
Route::prefix('social-links')->group(function () {
    Route::get('/', [SocialLinkController::class, 'index']);
    Route::get('/{id}', [SocialLinkController::class, 'show']);
    Route::post('/', [SocialLinkController::class, 'store']);
    Route::put('/{id}', [SocialLinkController::class, 'update']);
    Route::delete('/{id}', [SocialLinkController::class, 'destroy']);
});

// =========================
// Contacts
// =========================
Route::prefix('contacts')->group(function () {
    Route::get('/', [ContactController::class, 'index']);
    Route::get('/{id}', [ContactController::class, 'show']);
    Route::post('/', [ContactController::class, 'store']);
    Route::put('/{id}', [ContactController::class, 'update']);
    Route::delete('/{id}', [ContactController::class, 'destroy']);
});

// =========================
// Testimonials
// =========================
Route::prefix('testimonials')->group(function () {
    Route::get('/', [TestimonialController::class, 'index']);
    Route::get('/{id}', [TestimonialController::class, 'show']);
    Route::post('/', [TestimonialController::class, 'store']);
    Route::put('/{id}', [TestimonialController::class, 'update']);
    Route::delete('/{id}', [TestimonialController::class, 'destroy']);
});
