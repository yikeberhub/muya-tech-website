<?php

namespace App\Http\Controllers;

use App\Models\CompanyInfo;
use Illuminate\Http\Request;

class CompanyInfoController extends Controller
{
    public function index()
    {
        return response()->json(CompanyInfo::all(), 200);
    }

    public function show($id)
    {
        $info = CompanyInfo::find($id);
        if (!$info) {
            return response()->json(['message' => 'Company Info not found'], 404);
        }
        return response()->json($info, 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'company_name' => 'nullable|string|max:255',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:50',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'state' => 'nullable|string',
            'country' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'map_embed_url' => 'nullable|string',
            'logo_url' => 'nullable|string', 
        ]);

        $info = CompanyInfo::create($data);

        return response()->json($info, 201);
    }

    public function update(Request $request, $id)
    {
        $info = CompanyInfo::find($id);
        if (!$info) {
            return response()->json(['message' => 'Company Info not found'], 404);
        }

        $data = $request->all();
        $info->update($data);

        return response()->json($info, 200);
    }

    public function destroy($id)
    {
        $info = CompanyInfo::find($id);
        if (!$info) {
            return response()->json(['message' => 'Company Info not found'], 404);
        }
        $info->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
