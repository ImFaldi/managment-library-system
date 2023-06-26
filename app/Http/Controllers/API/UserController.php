<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function index()
    {
        $user = User::all();
        return response()->json([
            'user' => $user,
        ]);
    }

    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
        ]);
    }

    public function show(string $id)
    {
        $check = User::find($id);
        if ($check) {
            $user = User::find($id);
            return response()->json([
                'user' => $user,
            ]);
        } else {
            return response()->json([
                'message' => 'User not found',
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $check = User::find($id);
        if ($check) {
            $user = User::where('id', $id)->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);
            return response()->json([
                'message' => 'User updated successfully',
                'user' => $user,
            ]);
        } else {
            return response()->json([
                'message' => 'User not found',
            ]);
        }
    }

    public function destroy($id)
    {
        $check = User::find($id);
        if ($check) {
            $user = User::where('id', $id)->delete();
            return response()->json([
                'message' => 'User deleted successfully',
            ]);
        } else {
            return response()->json([
                'message' => 'User not found',
            ]);
        }
    }
}
