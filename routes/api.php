<?php

use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Client\EmpresaController;
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\Admin\EmpresaController as EmpresaClient;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function(){
   Route::get('/public/{slug}',[FrontController::class,'categoria']);
   Route::get('/auth/register',[AuthController::class,'register']);
   Route::get('/auth/login',[AuthController::class,'login']);


   Route::group(['middleware'=>'auth:sanctum'],function(){
       Route::post('/auth/logout',[AuthController::class,'logout']);

       //rol cliente
       Route::apiResource('/client/empresa',EmpresaController::class);
         
       //rol administador
       Route::apiResource('/admin/user',UserController::class);
       Route::apiResource('/admin/categoria',CategoriaController::class);
       Route::apiResource('/admin/empresa',EmpresaClient::class);

   });
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
