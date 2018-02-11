<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckLogin extends Controller
{
    public function Check(request $request)
    {
        if($request->session()->has("Type"))
        {
            return view("home");
        }
        return view("Login");
    }
}
