<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PendudukController;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    // Authentication Routes
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    // API Penduduk (butuh autentikasi)
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/penduduk', [PendudukController::class, 'index']);
        Route::post('/penduduk', [PendudukController::class, 'store']);
        Route::get('/penduduk/{id}', [PendudukController::class, 'show']);
        Route::put('/penduduk/{id}', [PendudukController::class, 'update']);
        Route::delete('/penduduk/{id}', [PendudukController::class, 'destroy']);
    });
});

