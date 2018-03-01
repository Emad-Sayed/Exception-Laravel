<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    public $table ="reports";
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
