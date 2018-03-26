<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;
use App\User;

class Manager extends Controller
{
    function GetAllUsers()
    {
        $arr[]=Array();
        $Users =User::all();
        foreach ($Users as $U)
        {
            $arr1=Array();
            $arr1['id']=$U->id;
            $arr1['mail']=$U->mail;
            $arr1['type']=$U->type->type;
            $fname=$U->fname;
            $lname=$U->lname;
            $arr1['name']=$fname." ".$lname;
            //$arr1['questions_number']=count($U->questions);
            $arr[]=$arr1;
        }

        return  json_encode($arr);
    }
    function UserProfile(request $request)
    {
        $arr = Array();
        $user_ID=$request->input('User_ID');
        $User=User::find($user_ID);
        $arr['id']=$User->id;
        $arr['fname']=$User->fname;
        $arr['lname']=$User->lname;
        $arr['img']=$User->img_name;
        $arr['mail']=$User->mail;
        $arr['type']=$User->type->type;
        $arr['questions']=count($User->questions);
        $arr['comments']=count($User->comments);


        return  view('search_profile',$arr);
    }
    function  AddAdmin(request $request)
    {
        $this->validate($request,[
            'Fname' => 'regex:/^[A-Z][a-z]{2,8}/',
            'Lname' => 'regex:/^[A-Z][a-z]{2,8}/',
            'email' => 'required|email',
            'password' => 'required|min:6|max:20',

        ]);
        $user=new User();
        $user->fname=$request->input('Fname');
        $user->lname=$request->input('Lname');
        $user->mail=$request->input('email');
        $user->password=$request->input('password');
        $user->secret_word="";
        $user->type_id=2;
        $user->img_name="";
        $user->save();
        return view('ManagerPages/ManagerPage');
    }
    function DeleteUser(request $request)
    {
        $user=User::find($request->input('user_id'));
        $user->comments()->delete();
        $user->questions()->delete();
        $user->jobs()->delete();
        $user->report()->delete();
        $user->delete();
    }
}
