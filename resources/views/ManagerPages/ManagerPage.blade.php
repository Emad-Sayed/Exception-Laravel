<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')
@section('content')
<?php
?>

<div id="option-div"  class="form-group" style="width: 320px;margin: auto">
    <label for="sel1">Search By Name:</label>
    <input onkeyup="Search(this)" id="search" type="text" class="form-control" name="search" placeholder="User Name">
    <button onclick="AddAdmin()" type="button" class="btn-outline-primary" style="margin: 0 auto; width: 320px">Add Admin</button>
</div>
    <h3 id="Question_Number"></h3>
<div class="container" id="head" style="margin: auto;width: 300px">
    <hr></hr>
</div>
<div class="container" id="container"></div>
<div style="margin: auto;width: 30px" >
    <i  id="Spinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
</div>
    <script src="js/ManagerPage.js"></script>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div id="AddAdmin">
    <div class="container ">
        <div class="row centered-form">
            <div class="col-xs-12 col-lg-8 col-md-4 col-lg-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Add Admin Information <small>Be aware</small></h3>
                    </div>
                    <div class="panel-body">
                        <form method="post" action="AddAdmin" onsubmit="return Validate()">
                            <div id='alert2'></div>
                            <input type="hidden" name="_token" value="{{csrf_token()}}">

                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="Fname" id="Fname" class="form-control input-sm" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="Lname" id="Lname" class="form-control input-sm" placeholder="Last Name">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address">
                            </div>

                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" name="confirm" id="confirm" class="form-control input-sm" placeholder="Confirm Password">
                                    </div>
                                </div>
                            </div>

                            <input type="submit" value="Add Admin" class="btn btn-info btn-block">
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
