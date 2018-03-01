<?php

namespace App\Http\Controllers;

use App\Report;
use Illuminate\Http\Request;

class User extends Controller
{
    function ReportQuestion(request $request)
    {
        $Question_ID=$request->input('Question_ID');
        $User_ID=$request->session()->get("Person")->id;
        $ArrayJSON = Report::select('*')->where('user_id',$User_ID)->where('question_id',$Question_ID)->get();
        if(strlen($ArrayJSON)>2)
        {
            return 'false';
        }
        else
        {
            $Report= new Report();
            $Report->user_id=$User_ID;
            $Report->question_id=$Question_ID;
            $Report->save();
            return 'true';
        }
    }
}
