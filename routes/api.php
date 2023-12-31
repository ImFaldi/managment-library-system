<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthorController;
use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\BorrowController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\UserController;


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

//Author
    Route::get('/Author', [AuthorController::class, 'index']);
    Route::post('/Author', [AuthorController::class, 'store']);
    Route::get('/Author/{id}', [AuthorController::class, 'show']);
    Route::put('/Author/{id}', [AuthorController::class, 'update']);
    Route::delete('/Author/{id}', [AuthorController::class, 'destroy']);

//Book
    Route::get('/Book', [BookController::class, 'index']);
    Route::post('/Book', [BookController::class, 'store']);
    Route::get('/Book/{id}', [BookController::class, 'show']);
    Route::put('/Book/{id}', [BookController::class, 'update']);
    Route::delete('/Book/{id}', [BookController::class, 'destroy']);
//Borrow
    Route::get('/Borrow', [BorrowController::class, 'index']);
    Route::post('/Borrow', [BorrowController::class, 'store']);
    Route::get('/Borrow/{id}', [BorrowController::class, 'show']);
    Route::put('/Borrow/{id}', [BorrowController::class, 'update']);
    Route::delete('/Borrow/{id}', [BorrowController::class, 'destroy']);
    Route::put('/Borrow/return/{id}', [BorrowController::class, 'return']);
//Category
    Route::get('/Category', [CategoryController::class, 'index']);
    Route::post('/Category', [CategoryController::class, 'store']);
    Route::get('/Category/{id}', [CategoryController::class, 'show']);
    Route::put('/Category/{id}', [CategoryController::class, 'update']);
    Route::delete('/Category/{id}', [CategoryController::class, 'destroy']);

//User
    Route::get('/User', [UserController::class, 'index']);
    Route::post('/User', [UserController::class, 'store']);
    Route::get('/User/{id}', [UserController::class, 'show']);
    Route::put('/User/{id}', [UserController::class, 'update']);
    Route::delete('/User/{id}', [UserController::class, 'destroy']);

