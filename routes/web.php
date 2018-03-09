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
Route::get('More', function () {
    return view('MoreDetails');
})->middleware('Logged');
/*Route::get('test', function () {
    $user=\App\User::find(1);
    echo "user name:".$user->fname;
    echo "Type :".$user->type->type;
});*/
Route::get('index', "Common@IndexView");
Route::get('Login', "CheckLogin@Check");
Route::post('Regist', "CheckLogin@Regist");
Route::post('verify', "LoginManager@Login");
Route::get('JobsView', "Common@JobsView")->middleware('Logged');
Route::get('Setting', "Common@Setting")->middleware('Logged');
Route::get('questions', "Common@QuestionView")->middleware('Logged');
Route::get('questions_loader', "Common@questions_loader")->middleware('Logged');
Route::get('jobs_loader', "Common@jobs_loader")->middleware('Logged');
Route::get('MyOption', "Common@MyOption")->middleware('Logged');
Route::get('tags_loader', "Common@tags_loader")->middleware('Logged');
Route::get('logOut', "Common@logOut")->middleware('Logged');
Route::get('details', "Common@details")->middleware('Logged');
Route::get('DeleteQuestion', "Admin@DeleteQuestion")->middleware('Logged');
Route::get('AddComment', "Common@AddComment")->middleware('Logged');
Route::get('AddQuestion', "Common@AddQuestion")->middleware('Logged');
Route::get('AddJob', "Common@AddJob")->middleware('Logged');
Route::get('ReportQuestion', "User@ReportQuestion")->middleware('Logged');
Route::get('GetReported', "Admin@GetAllReportedQuestions")->middleware('Logged');
Route::get('GetUsers', "Manager@GetAllUsers")->middleware('Logged');
Route::get('ProfileInfo', "Common@ProfileData")->middleware('Logged');
Route::get('UserProfile', "Manager@UserProfile")->middleware('Logged');

Route::post('ChangeProfilePic', "Common@ChangeProfilePicture")->middleware('Logged');
Route::post('AddQuestionImage', "Common@AddQuestionImage")->middleware('Logged');







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

