<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')
@section('content')
    <div class="container" id="container"></div>

    <div style="margin: auto;width: 30px" >
        <i  id="Spinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </div>
    <script src="js/AdminPage.js"></script>
@endsection
