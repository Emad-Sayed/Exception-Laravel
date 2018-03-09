<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')
@section('content')
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <link rel="stylesheet" href="css/profile.css">

    <!------ Include the above in your HEAD tag ---------->

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <div class="container" style="margin-top:120px;">
        <div class="prog-page">
            <div class="header-title header-btn">

                <div class="header-info">
                    <h2><i class="fa fa-info-circle"></i>Profile Information</h2>
                </div>
                <div class="header-btn-edit">
                </div>
            </div>

            <div class="prof-page-info">
                <div class="row">

                    <div class="col-md-3">

                        <div class="prof-img">
                            <div class="tags-label">
                                <span><i class="fa fa-tags"></i>12</span>
                            </div>
                            <img id="Image" src="Avatars/{{$img}}" >
                            <div class="img-title">
                                <h2 id="PhotoWord" >{{$fname." ".$lname}}</h2>
                            </div>
                            <button type="button" class="btn btn-success">Details</button>

                        </div>

                    </div>

                    <div class="col-md-9">


                        <div class="prof-info">

                            <div class="info"><label><i class="fa fa-user"></i>First Name :</label>  <span id="Fname"> {{$fname}}</span></div>
                            <div class="info"><label><i class="fa fa-user"></i>Last Name :</label>  <span id="Lname">{{$lname}}</span></div>
                            <div class="info"><label><i class="fa fa-user"></i>Email :</label>  <span id="Email__">{{$mail}}</span></div>
                            <div class="info"><label><i class="fa fa-user"></i>Type :</label>  <span id="Type__">{{$type}}</span></div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
