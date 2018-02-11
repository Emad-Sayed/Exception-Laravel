<?php

namespace App\Http\Controllers;

use App\Question;

use App\Tag;
use Illuminate\Filesystem\Cache;
use Illuminate\Http\Request;

class Common extends Controller
{
    //
    public function HomeView()
    {
        return view('home');
    }
    public function QuestionView()
    {
        return view('questions');
    }
    public function IndexView()
    {
        return view('index');
    }
    public function MyOption(request $request)
    {
        $temp=$request->session()->get('Type');
        if($temp=='1')
        return view('ManagerPages/ManagerPage');
        else if ($temp=='2')
            return view('AdminPages/AdminPage');
        else if ($temp=='3')
            return view('UserPages/UserPage');


    }
    public function questions_loader(request $request)
    {
        $arr[]=$request->session()->get('Type');
        $Question =Question::all();
        foreach ($Question as $Quest)
        {
            $arr1['id']=$Quest->id;
            $arr1['title']=$Quest->title;
            $arr1['body']=$Quest->body;
            $arr1['tag']=$Quest->tag->tag;
            $arr1['mail']=$Quest->user->mail;

            $arr[]=$arr1;
        }

        return  json_encode($arr);
    }
    public function tags_loader()
    {
        $tags =Tag::all();
        $arr=array() ;
        foreach ($tags as $tag)
        {
            $arr1['id']=$tag->id;
            $arr1['tag']=$tag->tag;;
            $arr[]=$arr1;
        }

        return  json_encode($arr);
    }
    public function logOut(request $request)
    {
        $request->session()->flush();
        return view('index');
    }
    public function details(request $request)
    {
        $Ques = Question::find($request->input("Question_ID"));
        $arr[]=$Ques->id;
        $arr2[]=$Ques->title;
        $arr3[]=$Ques->body;
        $arr4[]=$Ques->user->mail;
        $arr5[]=$Ques->tag->tag;
        $AllCollection[]=$arr;
        $AllCollection[]=$arr2;
        $AllCollection[]=$arr3;
        $AllCollection[]=$arr4;
        $AllCollection[]=$arr5;


        $comments=$Ques->comments;
        foreach($comments as $comm)
        {
            $arr6['comment']=$comm->comment;
            $arr6['mail']=$comm->user->mail;
            $AllCollection[]=$arr6;
        }
        return $AllCollection;
    }
}

