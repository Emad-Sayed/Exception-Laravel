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

Route::group(['middleware' => 'Logged'], function(){
    Route::get('JobsView', "Common@JobsView");
    Route::get('Setting', "Common@Setting");
    Route::get('questions', "Common@QuestionView");
    Route::get('questions_loader', "Common@questions_loader");
    Route::get('jobs_loader', "Common@jobs_loader");
    Route::get('MyOption', "Common@MyOption");
    Route::get('tags_loader', "Common@tags_loader");
    Route::get('logOut', "Common@logOut");
    Route::get('details', "Common@details");
    Route::get('DeleteQuestion', "Admin@DeleteQuestion");
    Route::get('AddComment', "Common@AddComment");
    Route::get('AddQuestion', "Common@AddQuestion");
    Route::get('AddJob', "Common@AddJob");
    Route::get('ReportQuestion', "User@ReportQuestion");
    Route::get('GetReported', "Admin@GetAllReportedQuestions");
    Route::get('GetUsers', "Manager@GetAllUsers");
    Route::post('AddAdmin', "Manager@AddAdmin");
    Route::get('DeleteUser', "Manager@Deleteuser");

    Route::get('ProfileInfo', "Common@ProfileData");
    Route::get('UserProfile', "Manager@UserProfile");

    Route::post('ChangeProfilePic', "Common@ChangeProfilePicture");
    Route::post('AddQuestionImage', "Common@AddQuestionImage");
    Route::get('MakeLike', "Common@MakeLike");
    Route::get('MakeDislike', "Common@MakeDislike");
    });
Route::group(['middleware' => 'Admin'], function() {
    Route::get('DeleteQuestion', "Admin@DeleteQuestion");
    Route::get('GetReported', "Admin@GetAllReportedQuestions");

});









Route::get('test2', "Common@test2");

Route::get('test', function () {
    $Question=\App\Question::all();
    //dd($Question);
    dd (json_encode($Question));
    //dd (json_encode($Question));
    /*foreach ($Question as $Quest)
    {
        echo $Quest->title;
        echo "<br></br>";
        echo $Quest->body;
        echo "<br></br>";
        echo $Quest->user->fname;
        echo "<br></br>";
        echo $Quest->tag->tag;

    }*/
}
    );

