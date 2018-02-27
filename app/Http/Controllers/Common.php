<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Question;

use App\Tag;
use Illuminate\Filesystem\Cache;
use Illuminate\Http\Request;

class Common extends Controller
{
    //
    public function JobsView()
    {
        return view('jobs');
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
    public function tags_loader(request $request)
    {
        $tags =Tag::all();
        $arr=array() ;
        $arr[]=$request->session()->get("Person")->mail;
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
        $arr6[]=$request->session()->get("Person")->mail;
        $AllCollection[]=$arr;
        $AllCollection[]=$arr2;
        $AllCollection[]=$arr3;
        $AllCollection[]=$arr4;
        $AllCollection[]=$arr5;
        $AllCollection[]=$arr6;


        $comments=$Ques->comments;
        foreach($comments as $comm)
        {
            $arr7['comment']=$comm->comment;
            $arr7['mail']=$comm->user->mail;
            $AllCollection[]=$arr7;
        }
        return $AllCollection;
    }
    function AddComment(request $request)
    {
        $body=$request->input('comment');
        $question_id=$request->input('question_id');
        $user_id=$request->session()->get('Person')->id;
        $comment=new Comment();
        $comment->comment=$body;
        $comment->question_id=$question_id;
        $comment->user_id=$user_id;
        $comment->save();
    }
    function test2(request $request)
    {
        echo $request->session()->get('Person');
    }
    function AddQuestion(request $request)
    {
        $tag=$request->input('tag');
        $title=$request->input('question_title');
        $body=$request->input('question_body');
        $user_id=$request->session()->get("Person")->id;
        $ArrayJSON = Tag::select('*')->where('tag',$tag)->get();
        $tag_id=$ArrayJSON[0]['id'];
        $question=new Question();
        $question->title=$title;
        $question->body=$body;
        $question->tag_id=$tag_id;
        $question->user_id=$user_id;
        $question->save();
        return view('questions');
    }
}

