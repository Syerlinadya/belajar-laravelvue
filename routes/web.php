<?php

use Illuminate\Support\Facades\Route;

// route ke file welcome di resources/views
Route::get('/', function () {
    return view('welcome');
});

Route::any('/{any}',function(){
    return view('home');
})->where('any','.*');
