<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Borrow;
use Illuminate\Http\Request;

class BorrowController extends Controller
{
    //

    public function index()
    {
        // Api call to get all borrows
        $borrows = Borrow::all();
        return response()->json([
            'borrows' => $borrows,
        ]);
    }

    public function store(Request $request)
    {
        // Api call to create a new borrow
        $borrow = Borrow::create([
            'user_id' => $request->user_id,
            'book_id' => $request->book_id,
            'borrow_date' => date('Y-m-d'),
            'return_date' => date('Y-m-d', strtotime($request->borrow_date . ' + 7 days')),
            'status' => "borrowed", // "borrowed" or "returned
            'penalty' => '0',
        ]);

        return response()->json([
            'message' => 'Borrow created successfully',
            'borrow' => $borrow,
        ]);

    }

    public function show(string $id)
    {
        // Api call to get a single borrow
        $borrow = Borrow::find($id);
        return response()->json([
            'borrow' => $borrow,
        ]);
    }

    public function update(Request $request, $id)
    {
        // Api call to update a borrow
        $check = Borrow::find($id);
        if ($check) {
            $borrow = Borrow::where('id', $id)->update([
                'user_id' => $request->user_id,
                'book_id' => $request->book_id,
                'borrow_date' => $request->borrow_date,
                'return_date' => $request->return_date,
                'status' => $request->status,
                'penalty' => $request->penalty,
            ]);
            return response()->json([
                'message' => 'Borrow updated successfully',
                'borrow' => $borrow,
            ]);
        } else {
            return response()->json([
                'message' => 'Borrow not found',
            ]);
        }
    }

    public function destroy($id)
    {
        // Api call to delete a borrow
        $check = Borrow::find($id);
        if ($check) {
            $borrow = Borrow::where('id', $id)->delete();
            return response()->json([
                'message' => 'Borrow deleted successfully',
            ]);
        } else {
            return response()->json([
                'message' => 'Borrow not found',
            ]);
        }
    }

    public function return(Request $request, $id)
    {
        // Api call to return a borrow
        $check = Borrow::find($id);
        if ($check) {
            $borrow = Borrow::where('id', $id)->update([
                'status' => $request->status,
                'penalty' => $request->penalty,
            ]);
            return response()->json([
                'message' => 'Borrow returned successfully',
                'borrow' => $borrow,
            ]);
        } else {
            return response()->json([
                'message' => 'Borrow not found',
            ]);
        }
    }
}
