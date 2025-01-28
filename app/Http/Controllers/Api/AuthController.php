<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $response = ['success' => false];

        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            $response['error'] = $validator->errors();
            return response()->json($response,401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);
        $user->assignRole('client');
        $response['success'] = true;
        //$response['token'] = $user->createToken('authToken')->plainTextToken;
        return response()->json($response,200);
    }

    public function login(Request $request)
    {
        
    }

    public function logout(Request $request)
    {
       
    }
}
