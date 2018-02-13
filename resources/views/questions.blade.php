<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')

@section('content')

    <div id="option-div"  class="form-group" style="width: 250px;margin: auto">
        <label for="sel1">Select TAG</label>
        <select id="Options" onchange="OnSelectedIndexChange(this)" class="form-control" id="sel1">
            <option disabled selected value>  </option>
        </select>
    </div>



<div class="container">
    <div class="col-md-12" id="questionsContrainer">

    </div>
</div>

    <div id="comments">

    </div>
<script src="js/questionsView.js"></script>
@endsection