<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home']);
Route::get('/home', [PageController::class, 'home']);

Route::redirect('/rendra', '/home');
Route::redirect('/about', '/home#about');
