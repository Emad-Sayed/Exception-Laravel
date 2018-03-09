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

        return  view('search_profile',$arr);
    }
}
