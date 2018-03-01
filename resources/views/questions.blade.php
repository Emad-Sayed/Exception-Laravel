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
        <h3 id="Question_Number"></h3>

    </div>
    <div id="buttons_option" style="margin: auto;width: 250px">
        <button onclick="AddQuestion();" id="add_question" style="float: left" type="button" class="btn btn-success">Add Question</button>
        <button onclick="MyQuestions();" id="my_questions" style="float: right" type="button" class="btn btn-success">My Questions</button>
    </div>


<div class="container">
    <div class="col-md-12" id="questionsContrainer"></div>
</div>
    <div style="margin: auto;width: 21px" >
        <i  id="Spinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </div>

    <div id="comments">

    </div>
<script src="js/questionsView.js"></script>
    <script src="js/questionsView.js"></script>
@endsection