<?php

namespace App\Http\Controllers;

use App\Models\CompanyInfo;
use App\Http\Resources\CompanyInfoResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CompanyInfoController extends Controller
{
    public function index()
    {
        $infos = CompanyInfo::all();
        return CompanyInfoResource::collection($infos);
    }

    public function show($id)
    {
        $info = CompanyInfo::find($id);
        if (!$info) {
            return response()->json(['message' => 'Company Info not found'], 404);
        }
        return new CompanyInfoResource($info);
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
            'logo_url' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('logo_url')) {
            $path = $request->file('logo_url')->store('company_info', 'public');
            $data['logo_url'] = basename($path);
        }

        $info = CompanyInfo::create($data);

        return new CompanyInfoResource($info);
    }

    public function update(Request $request, $id)
{
    $info = CompanyInfo::find($id);
    if (!$info) {
        return response()->json(['message' => 'Company Info not found'], 404);
    }

    Log::info('Updated data for company info: ' . print_r($request->all(), true));

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
        'logo_url' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    // Handle logo update
    if ($request->hasFile('logo_url')) {
        // Delete old logo if it exists
        if ($info->logo_url && Storage::disk('public')->exists($info->logo_url)) {
            Storage::disk('public')->delete($info->logo_url);
        }

        // Store new logo
        $path = $request->file('logo_url')->store('company_info/logo', 'public');
        $data['logo_url'] = $path;
    }

    // Update fields
    $info->update($data);

    return new CompanyInfoResource($info);
}

    public function destroy($id)
    {
        $info = CompanyInfo::find($id);
        if (!$info) {
            return response()->json(['message' => 'Company Info not found'], 404);
        }

        // delete logo if exists
        if ($info->logo_url) {
            Storage::disk('public')->delete('company_info/' . $info->logo_url);
        }

        $info->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
