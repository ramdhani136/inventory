<?php

use App\Http\Controllers\Items\ItemsController;
use App\Http\Controllers\Kategori\KategoriController;
use App\Http\Controllers\Satuan\SatuanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('/items', ItemsController::class);
Route::resource('/kategori', KategoriController::class);
Route::resource('/satuan', SatuanController::class);
