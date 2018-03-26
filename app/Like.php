<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    public $table ="likes_history";
    public $timestamps=false;
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function comment()
    {
        return $this->belongsTo('App\Comment');
    }
}
