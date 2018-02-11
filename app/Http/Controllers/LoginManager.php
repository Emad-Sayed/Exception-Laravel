<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginManager extends Controller
{
    //
    public function Login(request $request )
    {
        $mail= $request->input("mail");
        $password=$request->input("pass");
        $ArrayJSON = User::select('*')->where('mail',$mail)->where('password',$password)->get();
        if(strlen($ArrayJSON)>2)
        {
            $user =new User();
            $user->fname=$ArrayJSON[0]['fname'];
            $user->lname=$ArrayJSON[0]['lname'];
            $user->mail=$ArrayJSON[0]['mail'];
            $user->secret_word=$ArrayJSON[0]['secret_word'];
            $request->session()->put("Person",$user);
            $request->session()->put("Type",$ArrayJSON[0]['type_id']);
            return  "True";
        }
        else
        {
            return "False";
        }

    }
}
