<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')
@section('content')

    <div class="container">
        <div class="col-md-12" id="questionsContrainer">




             <h1>Revolution has begun!</h1>
              <p>'I am bound to Tahiti for more men.'
                  'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain.
                  'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.</p>
            <img src="Questions_Image/Capture.PNG" class="img-rounded"  alt="">

            <div>
                  <span class="badge">Posted 2012-08-02 20:47:04</span><div class="pull-right"><span class="label label-default">alice</span> <span class="label label-primary">story</span> <span class="label label-success">blog</span> <span class="label label-info">personal</span> <span class="label label-warning">Warning</span>
                      <span class="label label-danger">Danger</span></div>
              </div>
            <form action="ChangeProfilePic" method="post" enctype="multipart/form-data">
                <input type="hidden" name="_token" value="{{csrf_token()}}">
                <input class="btn" type="file"  name="avatar">
                <input class="btn btn-warning" type="submit" value="Change Profile Pic">
            </form>
              <button style="margin-top: 10px" type="button" class="btn btn-success">More Details</button>

              <hr>




        </div>
    </div>

    <div class="container">

            <div class="row">
                <div class="col-sm-1">
                    <div class="thumbnail">
                        <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                    </div><!-- /thumbnail -->
                </div><!-- /col-sm-1 -->

            <div >
                <br class="panel panel-default">
                    <div class="panel-heading">
                        <strong>myusername</strong> <span class="text-muted">commented 5 days ago</span>
                    </div>
                    <div class="panel-body">
                        'I am bound to Tahiti for more men.
                        Very good. Let me board you a moment—I come in peace. With that he leaped from the canoe, swam to the boat;
                        and climbing the gunwale, stood face to face with the captain.
                        Cross your arms, sir; throw back your head. Now, repeat after me.
                        As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days.
                        If I do not, may lightning strike me! A pretty scholar, laughed the Lakeman. Adios, Senor! and leaping into the sea, he swam back to his comrades';
                        $arr[]='You ought to be ashamed of yourself for asking such a simple question,
                    </div><!-- /panel-body -->
                    <br></br>
                    <button class="btn btn-success"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>22
                    </button>
                </div><!-- /panel panel-default -->
            </div><!-- /col-sm-5 -->
        </div>
    </div>



    <div class="container">

    <form>
        <div class="form-group">
            <label >Question Title</label>
            <input  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">SELECT TAG</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Question Body</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </form>
    </div>









    <!------ Include the above in your HEAD tag ---------->

    <div class="container">
        <section id="wrapper">



            <div class="row">
                <div class="col-md-10">

                    <div class="article">
                        <h3>Pellentesque habitant morbi tristique</h3>

                        <ul class="list-unstyled list-inline">
                            <li><i class="fa fa-user"></i> Sergio Rodriguez</li>
                        </ul>

                        <div class="article-content">

                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>

                            <blockquote class="hero">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit posuere erat a ante.</p>
                                <small>Someone famous <cite title="Source Title">Source Title</cite></small>
                            </blockquote>


                        </div>

                    </div>

                </div>

                <div class="col-md-2">

                    <div>

                        <h3>Contatcs</h3>

                        <div class="list-group" id="list-group">

                            <a href="#" class="list-group-item">
		<span class="fa-stack fa-lg">
		<i class="fa-stack-2x fa fa-circle "></i>
		<i class="fa-stack-1x text-primary fa fa-envelope "></i>
		</span>
                                <span class="">Email</span>
                            </a>
                            <a href="#" class="list-group-item">
		<span class="fa-stack fa-lg">
		<i class="fa-stack-2x fa fa-circle "></i>
		<i class="fa-stack-1x text-primary fa fa-envelope "></i>
		</span>
                                <span class="">Email</span>
                            </a>
                            <a href="#" class="list-group-item">
		<span class="fa-stack fa-lg">
		<i class="fa-stack-2x fa fa-circle "></i>
		<i class="fa-stack-1x text-primary fa fa-envelope "></i>
		</span>
                                <span class="">Email</span>
                            </a>
                            <a href="#" class="list-group-item">
		<span class="fa-stack fa-lg">
		<i class="fa-stack-2x fa fa-circle "></i>
		<i class="fa-stack-1x text-primary fa fa-envelope "></i>
		</span>
                                <span class="">Email</span>
                            </a>
                            <a href="#" class="list-group-item">
		<span class="fa-stack fa-lg">
		<i class="fa-stack-2x fa fa-circle "></i>
		<i class="fa-stack-1x text-primary fa fa-envelope "></i>
		</span>
                                <span class="">Email</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>



        </section>
    </div>



    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2 class="page-header">Comments</h2>
                <section class="comment-list">
                    <!-- First Comment -->
                    <article class="row">
                        <div class="col-md-10 col-sm-10">
                            <div class="panel panel-default arrow left">
                                <div class="panel-body">
                                    <header class="text-left">
                                        <div class="comment-user"><i class="fa fa-user"></i> That Guy</div>
                                        <time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> Dec 16, 2014</time>
                                    </header>
                                    <div class="comment-post">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <p class="text-right"><a href="#" class="btn btn-default btn-sm"><i class="fa fa-reply"></i> reply</a></p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </div>








    <table class="table table-striped">
        <thead>
        <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Question Title</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td> <button type="button" class="btn btn-success">Details</button></td>

        </tr>
        <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
            <td> <button type="button" class="btn btn-success">Details</button></td>

        </tr>
        <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>

            <td> <button type="button" class="btn btn-success">Details</button></td>

        </tr>
        </tbody>
    </table>
    </div>


    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <div class="container" style="margin-top:120px;">
        <div class="prog-page">
            <div class="header-title header-btn">
                <div class="header-info">
                    <h2><i class="fa fa-info-circle"></i>Profile Information</h2>
                </div>
                <div class="header-btn-edit">
                    <a href="#" type="button"><i class="fa fa-edit"></i>Edit Profile</a>
                </div>
            </div>

            <div class="prof-page-info">
                <div class="row">

                    <div class="col-md-3">

                        <div class="prof-img">
                            <div class="tags-label">
                                <span><i class="fa fa-tags"></i>12</span>
                            </div>
                            <img src="data:image/jpeg;base64,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">
                            <div class="img-title">
                                <h2>Merry Com</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9">


                        <div class="prof-info">

                            <div class="info"><label><i class="fa fa-user"></i>First Name :</label>  <span>Jolly Kewin</span></div>
                            <div class="info"><label><i class="fa fa-user"></i>Last Name :</label>  <span> Tomson</span></div>
                            <div class="info"><label><i class="fa fa-calendar"></i>Date Of Birth :</label>  <span>6-9-1993</span></div>
                            <div class="info"><label><i class="fa fa-male"></i>Height :</label>  <span>5.10"</span></div>
                            <div class="info"><label><i class="fa fa-male"></i>Weight :</label>  <span>65Kg</span></div>
                            <div class="info"><label><i class="fa fa-map-marker"></i>State :</label>  <span>Maharashtra , India</span></div>
                            <div class="info"><label><i class="fa fa-map-marker"></i>Zip Code :</label>  <span>656605</span></div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
    </div>
    <style>
        .prof-page-info{padding:10px;}
        .prof-img{width:100%;height:300px;position:relative;border:5px solid #666;}
        .prof-img img{position:absolute;width:100%;height:100%;padding:3px;}
        .img-title{position:absolute;bottom:0px;background:#666;color:#fff;width:100%;text-align:center;padding:5px;border:1px solid #fff;padding:5px 5px 5px 5px;}
        .info{padding:10px;font-size:14px;border-bottom:1px solid #ddd;}
        .prog-page{border:1px solid #ddd;box-shadow:1px 1px 5px #ddd;position:relative;}
        .header-info {position:relative;padding-left:25px;background:#666;color:#fff;padding:10px;}
        .prof-info .info i{padding:8px 9px 0px 9px;box-shadow:1px 1px 5px #ddd;background:#0099ff;width:30px;height:30px;border-radius:50%;color:#fff;margin-right:10px;}
        .header-info i{padding-right:8px;font-size:25px;}

        .tags-label {background:#0099ff;color:#fff;position:absolute;padding:7px 6px 7px 5px;
            box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);z-index:1;
        }

        .tags-label i{color:#fff;}
        .tags-label span{padding:4px;border:1px solid #fff;padding:4px 7px 3px 9px}
        .header-info a{cursor:pointer;float:right;position:absolute;}
        .header-btn-edit{float:right;top:15px;position:absolute;right:12px;}
        .header-btn-edit a{background:#2b7dc3;color:#fff;padding:10px;border-radius:20px;box-shadow:1px 1px 5px #eee;}
        .header-btn-edit a i{color:#fff;padding-right:8px;}
    </style>


    <form method="POST" enctype="multipart/form-data" name="MyForm" action="AddQuestionImage" onsubmit="return ValidateImageExist()"><input type="hidden" name="_token" value="{{csrf_token()}}"><input type="file" name="question_image"><input type="submit" value="Add Image To Question" class="btn btn-warning"></form>
@endsection
