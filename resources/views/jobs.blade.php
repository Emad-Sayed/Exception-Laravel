<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')

@section('content')
    <!------ Include the above in your HEAD tag ---------->
    <div style="margin: auto;width: 250px">
        <button onclick="AddJob()" id="JobAdding" type="button" class="btn btn-success">Job Advertising</button>
    </div>
    <div style="margin: auto;width: 150px" >
        <i  id="Spinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </div>
    <div id="div_container" class="container"></div>
<script src="js/JobsView.js"></script>
@endsection








