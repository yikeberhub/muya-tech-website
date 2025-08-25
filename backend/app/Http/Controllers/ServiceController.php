<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;


class ServiceController extends Controller
{

public function index()
{
    $services = Service::all();
    $services = ServiceResource::collection($services);
    return response()->json(['services' => $services], 200);    
}

public function show($id)
{
    $service = Service::findOrFail($id);
    return new ServiceResource($service);
}


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon_class' => 'required|string',
            'image' => 'required|file|image',
        ]);
    
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('service_images', 'public');
            $validated['image_url'] = $imagePath;
        }
    
        $service = Service::create($validated);
    
        return response()->json($service, 201);
    }
    

    public function update(Request $request, $id)
{
    $service = Service::findOrFail($id);

    $validated = $request->validate([
        'title' => 'nullable|string|max:255',
        'description' => 'nullable|string',
        'icon_class' => 'nullable|string',
        'image' => 'nullable|file|image',
    ]);

    // Log entire request, not just validated (optional)
    Log::info('Project update request data: ' . print_r($request->all(), true));

    if ($request->hasFile('image')) {
        // Delete old image if exists
        if ($service->image_url && Storage::disk('public')->exists($service->image_url)) {
            Storage::disk('public')->delete($service->image_url);
        }

        // Store new image
        $imagePath = $request->file('image')->store('service_images', 'public');
        $validated['image_url'] = $imagePath;
    }

    $service->fill($validated);
    $service->save();

    return response()->json($service, 200);
}

    
    public function destroy($id)
    {
        Service::destroy($id);
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
