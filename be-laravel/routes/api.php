<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Student_subjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;

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

Route::post('/login', [AuthController::class, 'login'])
    ->middleware('guest:sanctum')
    ->name('login');
Route::get('/me', [AuthController::class, 'me'])
    ->middleware('auth:sanctum')
    ->name('me');
Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth:sanctum')
    ->name('logout');

Route::group([
    'middleware' => 'auth:sanctum',
    'prefix' => 'v1/profile'
], function () {
    Route::get('/', [ProfileController::class, 'get']);
    Route::put('/', [ProfileController::class, 'update']);
    Route::patch('/', [ProfileController::class, 'change']);
});

Route::group([
    'middleware' => 'auth:sanctum',
    'prefix' => 'v1/student'
], function () {
    Route::get('/', [StudentController::class, 'index']);
    Route::post('/', [StudentController::class, 'store']);
    Route::put('/{student}', [StudentController::class, 'update'])->whereUlid('student');
    Route::delete('/{student}', [StudentController::class, 'destroy'])->whereUlid('student');
});


Route::group([
    'middleware' => 'auth:sanctum',
    'prefix' => 'v1/subject'
], function () {
    // subject
    Route::get('/', [SubjectController::class, 'index']);
    Route::post('/', [SubjectController::class, 'store']);
    Route::put('/{subject}', [SubjectController::class, 'update'])->whereUlid('subject');
    Route::delete('/{subhect}', [SubjectController::class, 'destroy'])->whereUlid('subject');
});

Route::group([
    'middleware' => 'auth:sanctum',
    'prefix' => 'v1/student-subject'
], function () {
    // subject
    Route::get('/', [Student_subjectController::class, 'index']);
    Route::post('/', [Student_subjectController::class, 'store']);
    Route::put('/{student_subject}', [Student_subjectController::class, 'update'])->whereUlid('subject_subject');
    Route::delete('/{student_subject}', [Student_subjectController::class, 'destroy'])->whereUlid('subject_subject');
});
