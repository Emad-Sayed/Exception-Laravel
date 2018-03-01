<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    public $table ="jobs";
    public $timestamps=false;
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
