<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

//Author
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/Author', [AuthorController::class, 'index']);
    Route::post('/Author', [AuthorController::class, 'store']);
    Route::get('/Author/{id}', [AuthorController::class, 'show']);
    Route::put('/Author/{id}', [AuthorController::class, 'update']);
    Route::delete('/Author/{id}', [AuthorController::class, 'destroy']);
});

//Book
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/Book', [BookController::class, 'index']);
    Route::post('/Book', [BookController::class, 'store']);
    Route::get('/Book/{id}', [BookController::class, 'show']);
    Route::put('/Book/{id}', [BookController::class, 'update']);
    Route::delete('/Book/{id}', [BookController::class, 'destroy']);
});

//Borrow
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/Borrow', [BorrowController::class, 'index']);
    Route::post('/Borrow', [BorrowController::class, 'store']);
    Route::get('/Borrow/{id}', [BorrowController::class, 'show']);
    Route::put('/Borrow/{id}', [BorrowController::class, 'update']);
    Route::delete('/Borrow/{id}', [BorrowController::class, 'destroy']);
});

//Category
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/Category', [CategoryController::class, 'index']);
    Route::post('/Category', [CategoryController::class, 'store']);
    Route::get('/Category/{id}', [CategoryController::class, 'show']);
    Route::put('/Category/{id}', [CategoryController::class, 'update']);
    Route::delete('/Category/{id}', [CategoryController::class, 'destroy']);
});
