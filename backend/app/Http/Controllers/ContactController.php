<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Http\Resources\ContactResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    // Fetch all contacts
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        $contacts = ContactResource::collection($contacts);

        return response()->json(['contacts'=>$contacts], 200);
    }

    // Store a new contact
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'phone_number' => 'nullable|string|max:20',
            'message' => 'nullable|string',
        ]);

        $contact = Contact::create($validated);

        return new ContactResource($contact);
    }

    // Show a single contact
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        return new ContactResource($contact);
    }

    // Update a contact
    public function update(Request $request, $id)
    {
        $contact = Contact::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'phone_number' => 'nullable|string|max:20',
            'message' => 'nullable|string',
        ]);

        $contact->update($validated);
        $contact = new ContactResource($contact);

        return response()->json(['contact' => $contact, 'message' => 'Contact updated successfully'], 200);
    }

    // Delete a contact
    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return response()->json(['message' => 'Contact deleted successfully.'], 200);
    }
}
