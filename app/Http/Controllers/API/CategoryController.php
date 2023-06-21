<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //

    public function index()
    {
        // Api call to get all categories
        $categories = Category::all();
        return response()->json([
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        // Api call to create a new category
        $category = Category::create([
            'title' => $request->title,
        ]);

        return response()->json([
            'message' => 'Category created successfully',
            'category' => $category,
        ]);

    }

    public function show(string $id)
    {
        // Api call to get a single category
        $category = Category::find($id);
        return response()->json([
            'category' => $category,
        ]);
    }

    public function update(Request $request, $id)
    {
        // Api call to update a category
        $check = Category::find($id);
        if ($check) {
            $category = Category::where('id', $id)->update([
                'title' => $request->title,
            ]);
            return response()->json([
                'message' => 'Category updated successfully',
                'category' => $category,
            ]);
        } else {
            return response()->json([
                'message' => 'Category not found',
            ]);
        }
    }

    public function destroy($id)
    {
        // Api call to delete a category
        $check = Category::find($id);
        if ($check) {
            $category = Category::where('id', $id)->delete();
            return response()->json([
                'message' => 'Category deleted successfully',
            ]);
        } else {
            return response()->json([
                'message' => 'Category not found',
            ]);
        }
    }

}
