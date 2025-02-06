<?php

use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Client\EmpresaController as EmpresaClient;
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\Admin\EmpresaController ;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function(){
    Route::post('/auth/register',[AuthController::class,'register']);
    Route::post('/auth/login',[AuthController::class,'login']);

    Route::get('/public/empresas/{quantity}',[FrontController::class,'empresas']);
    Route::post('/public/empresas/search',[FrontController::class,'search']);

    Route::get('/public/categorias',[FrontController::class, 'categorias']);
    Route::get('/public/categorias/{slug}',[FrontController::class,'categoria']);

    Route::group(['middleware'=>'auth:sanctum'],function(){
       Route::post('/auth/logout',[AuthController::class,'logout']);

       //rol cliente
       Route::apiResource('/client/empresa',EmpresaClient::class);
         
       //rol administador
       Route::apiResource('/admin/user',UserController::class);
       Route::apiResource('/admin/categoria',CategoriaController::class);
       Route::apiResource('/admin/empresa',EmpresaController::class);

   });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
