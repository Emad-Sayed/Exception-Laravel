<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
@extends('layouts.bar')

@section('content')

    <div  class="form-group" style="width: 250px;margin: auto">
        <label for="sel1">Select TAG</label>
        <select id="Options" onchange="OnSelectedIndexChange(this)" class="form-control" id="sel1">
            <option disabled selected value>  </option>
        </select>
    </div>



<div class="container">
    <div class="col-md-12" id="questionsContrainer">


    <!--    <h1>Alice in Wonderland, part dos</h1>
        <p>'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words:
            'Yes, we went to school in the sea, though you mayn't believe it—'
            'I never said I didn't!' interrupted Alice.
            'You did,' said the Mock Turtle.</p>

        <div>
            <span class="badge">Posted 2012-08-02 20:47:04</span>
        </div>
        <button  type="button" class="btn btn-success">More Details</button>

        <hr>!-->




      <!--  <h1>Revolution has begun!</h1>
        <p>'I am bound to Tahiti for more men.'
            'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain.
            'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.</p>
        <div>
            <span class="badge">Posted 2012-08-02 20:47:04</span><div class="pull-right"><span class="label label-default">alice</span> <span class="label label-primary">story</span> <span class="label label-success">blog</span> <span class="label label-info">personal</span> <span class="label label-warning">Warning</span>
                <span class="label label-danger">Danger</span></div>
        </div>
        <button style="margin-top: 10px" type="button" class="btn btn-success">More Details</button>
        <hr>
!-->



    </div>
</div>
<script src="js/questionsView.js"></script>
@endsection








