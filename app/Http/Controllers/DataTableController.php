<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DataTableController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $users = User::all(); // Mengambil data yang diperlukan untuk DataTable

        if ($user->role == 'admin') {
            return Inertia::render('Admin/DataTable', [
                'users' => $users,
            ]);
        } else if ($user->role == 'receptionist') {
            return Inertia::render('Receptionist/DataTable', [
                'users' => $users,
            ]);
        } else {
            return Inertia::render('Welcome', [
                'users' => $users,
            ]);
        }
    }
}
