<?php

namespace App\Http\Controllers;

use App\Models\HeroSection;
use Illuminate\Http\Request;

class HeroSectionController extends Controller
{
    public function index()
    {
        return response()->json(HeroSection::all(), 200);
    }

    public function update(Request $request, $id)
    {
        $hero = HeroSection::findOrFail($id);
        $hero->update($request->all());
        return response()->json($hero, 200);
    }
}
