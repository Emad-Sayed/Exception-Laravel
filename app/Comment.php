<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public $table ="comments";
    public $timestamps=false;
    public function question()
    {
        return $this->belongsTo('App\Question');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
