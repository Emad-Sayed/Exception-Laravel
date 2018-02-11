<?php

namespace App\Http\Middleware;

use Closure;

class Loggedin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $temp = $request->session()->get("Type");
        if($temp=='')
            return redirect('Login');
        return $next($request);
    }
}
