<?php

use App\Http\Controllers\API\PostsApiController;
use App\Http\Controllers\API\UserApiController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;


Route::controller(AuthController::class)->group(function(){
    Route::get("./login" , "login");
    Route::get("./regist" , "regist");
});


Route::controller(UserApiController::class)->group(function(){
    Route::get('/user/index' , "index");
    Route::post('/user/login' , "login");
    Route::get('/user.show/{id}', "show");
    Route::post('/user/store' , "store");
    Route::put('/user.update/{id}', "update");
    Route::delete('/user.delete/{id}', "destroy");
    // Route::get('/user/logout' , "logout");
});
Route::controller(PostsApiController::class)->group(function(){
    Route::get('/post/index' , "index");
    Route::get('/post/img' , "img");
    Route::get('/post/index_user' , "index_user");
    Route::get('/post.show/{id}', "show");
    Route::post('/post/store' , "store");
    Route::put('/post.update/{id}', "update");
    Route::delete('/post.delete/{id}', "destroy");
});
