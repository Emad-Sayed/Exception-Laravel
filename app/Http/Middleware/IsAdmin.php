<?php

namespace App\Http\Middleware;

use Closure;

class IsAdmin
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
        if($temp!=2)
            abort(403, 'Access denied');
        return $next($request);
    }
}
