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
              <div>
                  <span class="badge">Posted 2012-08-02 20:47:04</span><div class="pull-right"><span class="label label-default">alice</span> <span class="label label-primary">story</span> <span class="label label-success">blog</span> <span class="label label-info">personal</span> <span class="label label-warning">Warning</span>
                      <span class="label label-danger">Danger</span></div>
              </div>
              <button style="margin-top: 10px" type="button" class="btn btn-success">More Details</button>
              <hr>




        </div>
    </div>

    <div class="container">

        <div class="row">


            <div class="col-sm-5">
                <div class="panel panel-default">
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
                </div><!-- /panel panel-default -->
            </div><!-- /col-sm-5 -->



    </div><!-- /container -->

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
    </div>

                    </section>
                </div>
            </div>
        </div>

@endsection
