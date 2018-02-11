<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public $table ="types";
    public $timestamps=false;
    public function user()
    {
        return $this->hasMany('App\User');
    }
}
