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
            $arr1['user_id']=$U->user_id;
            $arr1['mail']=$U->mail;
            $arr1['type']=$U->type->type;
            $fname=$U->fname;
            $lname=$U->lname;
            $arr1['name']=$fname." ".$lname;
            $arr1['questions_number']=count($U->questions);
            $arr[]=$arr1;
        }

        return  json_encode($arr);
    }
}
