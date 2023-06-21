<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    //

    public function index()
    {
        // Api call to get all authors
        $authors = Author::all();
        return response()->json([
            'authors' => $authors,
        ]);
    }

    public function store(Request $request)
    {
        // Api call to create a new author
        $author = Author::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        return response()->json([
            'message' => 'Author created successfully',
            'author' => $author,
        ]);
    }

    public function show(string $id)
    {
        // Api call to get a single author
        $check = Author::find($id);
        if ($check) {
            $author = Author::find($id);
            return response()->json([
                'author' => $author,
            ]);
        } else {
            return response()->json([
                'message' => 'Author not found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        // Api call to update a author
        $check = Author::find($id);
        if ($check) {
            $author = Author::where('id', $id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);
            return response()->json([
                'message' => 'Author updated successfully',
            ]);
        } else {
            return response()->json([
                'message' => 'Author not found',
            ]);
        }
    }

    public function destroy($id)
    {
        // Api call to delete a author
        $check = Author::find($id);
        if ($check) {
            $author = Author::where('id', $id)->delete();
            return response()->json([
                'message' => 'Author deleted successfully',
            ]);
        } else {
            return response()->json([
                'message' => 'Author not found',
            ]);
        }
    }
}
