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
@endsection
