<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\attendenceController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/Challenge_02', [attendenceController::class, 'challenge_02']);

Route::get('/Challenge_04', [attendenceController::class, 'groupByOwnersService']);
