<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function empresas(Request $request)
    {
        $data = Empresa::orderByDesc("created_at")->take($request->quantity)->get(["id","nombre","descripcion"]);
        return response()->json($data,200);
    }

    public function search(Request $request)
    {
        $data = Empresa::where("nombre","like","%".$request->text."%")->get(["id","nombre","descripcion"]);
        return response()->json($data,200);
    }
}
