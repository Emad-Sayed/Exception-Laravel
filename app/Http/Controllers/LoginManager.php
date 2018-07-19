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
        $userData = User::select('*')->where('mail',$mail)->where('password',$password)->get();
        if(count($userData))
        {
            $user =new User();
            $user->id=$userData[0]['id'];
            $user->fname=$userData[0]['fname'];
            $user->lname=$userData[0]['lname'];
            $user->mail=$userData[0]['mail'];
            $user->secret_word=$userData[0]['secret_word'];
            $user->img_name=$userData[0]['img_name'];
            $user->user_rate=$userData[0]['user_rate'];
            $request->session()->put("Person",$user);
            $request->session()->put("Type",$userData[0]['type_id']);
            return  "True";
        }
        else
        {
            return "False";
        }

    }

}
