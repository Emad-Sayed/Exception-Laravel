<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;

class Admin extends Controller
{
    function DeleteQuestion(request $request)
    {
        $qes=Question::find($request->input('id'));
        $qes->delete();
    }
}
