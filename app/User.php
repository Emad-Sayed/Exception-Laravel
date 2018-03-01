<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $table ="users";
    public $timestamps=false;
    public function type()
    {
        return $this->belongsTo('App\Type');
    }
    public function questions()
    {
        return $this->hasMany('App\Question');
    }
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
    public function jobs()
    {
        return $this->hasMany('App\Job');
    }
    public function report()
    {
        return $this->hasMany('App\Report');
    }
}
