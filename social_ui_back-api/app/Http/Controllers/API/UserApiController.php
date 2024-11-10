<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return response()->json(['users' => $user]);
    }

    public function login(Request $request){
        $email = $request['email'];
        $password = $request['password'];

        if(Auth::attempt(['email' => $email, 'password' => $password])){
            $user = Auth::user();
            // $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['user' => $user]);
        }else{
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json(['message' => 'User created successfully'], 201);
        }catch(Exception $e){
            return response()->json(["msg"=>"error storing ".$e->getMessage()],);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $user = User::find($id);
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        try{
            $user = User::find($id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json(['message' => 'User updated successfully'], 200);
            return $user;
        }catch(Exception $e){
            return response()->json(["msg"=>"error updating ".$e->getMessage()],);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try{
            User::destroy($id);
            return response()->json(['message' => 'User deleted successfully'], 204);
        }catch(Exception $e){
            return response()->json(["msg"=>"error deleting ".$e->getMessage()],);
        }
    }
}
