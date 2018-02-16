<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});


Route::get('Login', "CheckLogin@Check");
Route::post('Regist', "CheckLogin@Regist");



Route::get('More', function () {
    return view('MoreDetails');
})->middleware('Logged');


/*Route::get('test', function () {
    $user=\App\User::find(1);
    echo "user name:".$user->fname;
    echo "Type :".$user->type->type;
});*/

Route::post('verify', "LoginManager@Login");
Route::get('home', "Common@HomeView")->middleware('Logged');
Route::get('index', "Common@IndexView")->middleware('Logged');
Route::get('questions', "Common@QuestionView")->middleware('Logged');
Route::get('questions_loader', "Common@questions_loader")->middleware('Logged');
Route::get('MyOption', "Common@MyOption")->middleware('Logged');
Route::get('tags_loader', "Common@tags_loader")->middleware('Logged');
Route::get('logOut', "Common@logOut");
Route::get('details', "Common@details");
Route::get('DeleteQuestion', "Admin@DeleteQuestion");
Route::get('AddComment', "Common@AddComment");
Route::get('AddQuestion', "Common@AddQuestion");



Route::get('test2', "Common@test2");

Route::get('test', function () {
    $Question=\App\Question::all();
    foreach ($Question as $Quest)
    {
        echo $Quest->title;
        echo "<br></br>";
        echo $Quest->body;
        echo "<br></br>";
        echo $Quest->user->fname;
        echo "<br></br>";
        echo $Quest->tag->tag;

    }});

