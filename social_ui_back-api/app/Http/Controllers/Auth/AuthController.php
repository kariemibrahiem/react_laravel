<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function regist(AuthRequest $request){
        $validData = $request->validated();
       try{
      
        $user = User::create($validData);
        $token = $user->createToken('auth_token')->plainTextToken;
        return redirect()->json(['data'=>$user , 'token'=>$token]);
       }catch(Exception $e){
        return redirect()->json(['msg'=> $e->getMessage()]);
       }
    }

    
    public function login(AuthRequest $request){
        
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|string|min:6',
            ]);
            
            $credentials = $request->only('email', 'password');
            
            $user = User::where("email", "=" , $request->only(['emial']));
            $token = $user->createToken('auth_token')->plainTextToken;
        if (Auth::attempt($credentials)) {
            return redirect()->json(['msg'=>"welcome" , "access_token"=>$token]);
            return "good";  
        }

        return back()->withErrors([
            'email' => 'The  credentials is not right.',
        ]);
    }
}
