<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Dislike;
use App\Like;
use App\User;
use App\Job;
use App\Question;
use Image;
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
    public function Setting()
    {
        return view('profile');
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
            $arr1['img']=$Quest->question_img_name;
            $arr1['mail']=$Quest->user->mail;

            $arr[]=$arr1;
        }
        return  json_encode($arr);
    }
    public function jobs_loader()
    {
        $Job =Job::all();
        $arr[]= Array();
        foreach ($Job as $J)
        {
            $arr1['id']=$J->id;
            $arr1['title']=$J->title;
            $arr1['body']=$J->body;
            $arr1['address']=$J->address;
            $arr1['email_1']=$J->contact_1;
            $arr1['email_2']=$J->contact_2;
            $arr1['fname']=$J->user->fname;
            $arr1['lname']=$J->user->lname;
            $arr[]=$arr1;
        }

        return  json_encode($arr);
    }

    public function tags_loader(request $request)
    {
        $tags =Tag::all();
        $arr=array() ;
        $arr[]=$request->session()->get("Person")->mail;
        $arr[]=$request->session()->get("Person")->img_name;
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
        $arr7[]=$Ques->question_img_name;
        $AllCollection[]=$arr;
        $AllCollection[]=$arr2;
        $AllCollection[]=$arr3;
        $AllCollection[]=$arr4;
        $AllCollection[]=$arr5;
        $AllCollection[]=$arr6;
        $AllCollection[]=$arr7;


        $comments=$Ques->comments;
        foreach($comments as $comm)
        {
            $arr7['id']=$comm->id;
            $arr7['comment']=$comm->comment;
            $arr7['likes']=$comm->comment_likes;
            $arr7['dislikes']=$comm->comment_dislikes;
            $arr7['mail']=$comm->user->mail;
            $arr7['image']=$comm->user->img_name;
            $arr7['rate']=$comm->user->user_rate;
            $AllCollection[]=$arr7;
        }
        return $AllCollection;
    }
    function AddComment(request $request)
    {
        $body=$request->input('comment');
        $question_id=$request->input('question_id');
        $user_id=$request->session()->get('Person')->id;
        $JS_MAIL=$request->input('JS_MAIL');
        $mail=$request->session()->get('Person')->mail;
        if($JS_MAIL==$mail)
        {
            $comment=new Comment();
            $comment->comment=$body;
            $comment->question_id=$question_id;
            $comment->user_id=$user_id;
            $comment->save();
            return "true";
        }
        return "false";

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
        $question->question_img_name="";

        $question->save();
        return view('questions');
    }
    function AddJob(request $request)
    {
        $rate_num=$request->session()->get("Person")->user_rate;
        if($rate_num>=100)
        {
            $title=$request->input('title');
            $email_1=$request->input('email_1');
            $email_2=$request->input('email_2');
            $user_id=$request->session()->get("Person")->id;
            $address=$request->input('address');
            $body=$request->input('body');
            $Job=new Job();
            $Job->title=$title;
            $Job->contact_1=$email_1;
            $Job->contact_2=$email_2;
            $Job->address=$address;
            $Job->body=$body;
            $Job->user_id=$user_id;
            $Job->save();
            return "true";
        }
        return "false";
    }
    function ProfileData(request $request)
    {
        $arr[]=$request->session()->get("Person")->id;
        $arr[]=$request->session()->get("Person")->fname;
        $arr[]=$request->session()->get("Person")->lname;
        $arr[]=$request->session()->get("Person")->img_name;
        $arr[]=$request->session()->get("Person")->mail;

        $type=$request->session()->get("Type");
        if($type==1)
            $arr[]="Manager";
        else if($type==2)
            $arr[]="Admin";
        else
            $arr[]="User";
        $arr[]=$request->session()->get("Person")->user_rate;

        return  json_encode($arr);
    }
    function ChangeProfilePicture(request $request)
    {

        if($request->has('avatar'))
        {
            $User_ID=$request->session()->get('Person')->id;
            //File Work
            $avatar=$request->file('avatar');
            $fileName=$User_ID.'.'.$avatar->getClientOriginalExtension();
            Image::make($avatar)->Resize(300,300)->save(public_path('Avatars/'.$fileName));
            $request->session()->get("Person")->img_name=$fileName;

            //DB Work
            $user=User::find($User_ID);
            $user->img_name=$User_ID.'.'.$avatar->getClientOriginalExtension();
            $user->save();
        }
        return view('profile');
    }
    function AddQuestionImage(request $request)
    {
        $Question_ID=$request->input('Question_ID');

        //File Work
        $avatar=$request->file('question_image');
        $fileName=$Question_ID.'.'.$avatar->getClientOriginalExtension();
        Image::make($avatar)->resize(800,400)->save(public_path('Questions_Image/'.$fileName));

        //DB Work
        $question=Question::find($Question_ID);
        $question->question_img_name=$Question_ID.'.'.$avatar->getClientOriginalExtension();
        $question->save();

        return view('questions');
    }
    function MakeLike(request $request)
    {
        $Comment_ID = $request->input('Comment_ID');
        $User_ID = $request->session()->get("Person")->id;
        $Comment_Owner = $request->input('Comment_Mail');
        $ArrayJSON = Like::select('*')->where('comment_id', $Comment_ID)->where('user_id', $User_ID)->get();
        if (strlen($ArrayJSON) > 2) {
            return 'false';
        } else {
            $ArrayJSON = User::select('*')->where('mail', $Comment_Owner)->get();
            $Comment_Owner_ID = $ArrayJSON[0]['id'];
            if ($Comment_Owner_ID == $User_ID) {
                return 'false';
            }
            $User_OWner = User::find($Comment_Owner_ID);
            $User_OWner->user_rate = $User_OWner->user_rate + 1;
            $User_OWner->save();

            $Likes_Table = new Like();
            $Likes_Table->user_id = $User_ID;
            $Likes_Table->comment_id = $Comment_ID;
            $Likes_Table->save();

            $Comment = Comment::find($Comment_ID);
            $Comment->comment_likes = $Comment->comment_likes + 1;
            $Comment->save();


            return 'true';
        }
    }
        function MakeDislike(request $request)
        {
            $aa= Array();
            $Comment_ID = $request->input('Comment_ID');
            $User_ID = $request->session()->get("Person")->id;
            $Comment_Owner = $request->input('Comment_Mail');
            $ArrayJSON = Dislike::select('*')->where('comment_id', $Comment_ID)->where('user_id', $User_ID)->get();
            if (strlen($ArrayJSON) > 2) {
                return 'false';
            } else {
                $ArrayJSON = User::select('*')->where('mail', $Comment_Owner)->get();
                $Comment_Owner_ID = $ArrayJSON[0]['id'];
                if ($Comment_Owner_ID == $User_ID) {
                    return 'false';
                }
                $User_OWner = User::find($Comment_Owner_ID);
                $User_OWner->user_rate = $User_OWner->user_rate - 1;
                $User_OWner->save();

                $DisLikes_Table = new Dislike();
                $DisLikes_Table->user_id = $User_ID;
                $DisLikes_Table->comment_id = $Comment_ID;
                $DisLikes_Table->save();

                $Comment = Comment::find($Comment_ID);
                $Comment->comment_dislikes = $Comment->comment_dislikes + 1;
                $Comment->save();


                return 'true';
            }
        }

}

