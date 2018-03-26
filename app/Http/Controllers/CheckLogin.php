<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Image;

class CheckLogin extends Controller
{
    public function Check(request $request)
    {
        if($request->session()->has("Type"))
        {
            return view("jobs");
        }
        return view("Login");
    }
    public function Regist_Page()
    {
        return view('Registration');
    }
    public function Regist(request $request)
    {
        $this->validate($request,[
            'Fname' => 'regex:/^[A-Z][a-z]{2,8}/',
            'Lname' => 'regex:/^[A-Z][a-z]{2,8}/',
            'email' => 'required|email',
            'password' => 'required|min:6|max:20',
            'secret_word' => 'required|min:6|max:20',

            ]);
        $user=new User();
        $user->fname=$request->input('Fname');
        $user->lname=$request->input('Lname');
        $user->mail=$request->input('email');
        $user->password=$request->input('password');
        $user->secret_word=$request->input('secret_word');
        $user->type_id=3;
        $user->img_name="";
        $user->save();
    }
}
