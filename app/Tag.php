<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public $table ="tags";
    public $timestamps=false;
    public function questions()
    {
        return $this->hasMany('App\Question');
    }
}
