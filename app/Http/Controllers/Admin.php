<?php

namespace App\Http\Controllers;

use App\Question;
use App\Report;
use Illuminate\Http\Request;

class Admin extends Controller
{
    function DeleteQuestion(request $request)
    {
        $qes=Question::find($request->input('id'));
        $qes->comments()->delete();
        $qes->report()->delete();
        $qes->delete();
    }
    function GetAllReportedQuestions()
    {
        $arr[]=Array();
        $Report =Report::all();
        foreach ($Report as $Rep)
        {
            $arr1=Array();
            $arr1['id']=$Rep->id;
            $arr1['user_id']=$Rep->user_id;
            $arr1['question_id']=$Rep->question_id;
            $arr1['mail']=$Rep->user->mail;
            $fname=$Rep->user->fname;
            $lname=$Rep->user->lname;
            $arr1['name']=$fname." ".$lname;
            $arr[]=$arr1;
        }

        return  json_encode($arr);
    }
}
