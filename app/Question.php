<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public $table ="questions";
    public $timestamps=false;
    public function tag()
    {
        return $this->belongsTo('App\Tag');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
    public function report()
    {
        return $this->hasMany('App\Report');
    }
}
