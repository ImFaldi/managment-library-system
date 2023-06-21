<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        // Api call to get all books
        $books = Book::all();
        return response()->json([
            'books' => $books,
        ]);
    }

    public function store(Request $request)
    {
        // Api call to create a new book
        $book = Book::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'author_id' => $request->author_id,
            'status' => $request->status,
            'year' => $request->year,
        ]);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book,
        ]);
    }

    public function show(string $id)
    {
        // Api call to get a single book
        $book = Book::find($id);
        return response()->json([
            'book' => $book,
        ]);
    }


    public function update(Request $request, $id)
    {
        // Api call to update a book
        $check = Book::find($id);
        if ($check) {
            $book = Book::where('id', $id)->update([
                'title' => $request->title,
                'category_id' => $request->category_id,
                'author_id' => $request->author_id,
                'status' => $request->status,
                'year' => $request->year,
            ]);
            return response()->json([
                'message' => 'Book updated successfully',
                'book' => $book,
            ]);
        } else {
            return response()->json([
                'message' => 'Book not found',
            ]);
        }
    }


    public function destroy($id)
    {
        // Api call to delete a book
        $check = Book::find($id);
        if ($check) {
            $book = Book::where('id', $id)->delete();
            return response()->json([
                'message' => 'Book deleted successfully',
                'book' => $book,
            ]);
        } else {
            return response()->json([
                'message' => 'Book not found',
            ]);
        }
    }
}
