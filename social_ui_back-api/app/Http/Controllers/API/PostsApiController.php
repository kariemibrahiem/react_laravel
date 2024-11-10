<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\postRequest;
use App\Models\Post;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $posts = Post::all();
         return response()->json(["posts"=>$posts]);
    }
    public function img(){
        $url = storage::url('public/uploads/');
        return response()->json(["url"=>$url]);
    }
    public function index_user()
    {
        $user = User::find(1);
        return response()->json(['user' => $user]);
    }

     /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        return Post::find($id);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $imgPath = null;
        try{

            $post = new Post();
            $post->title = $request['title'];
            $post->content = $request['content'];
            if ($request->hasFile('img')) {
                $imgPath = $request->file('img')->store('uploads', 'public');
                // $imgPath = Storage::disk('public')->putFileAs("upleads2" , $request->img , $imgPath);
                
            }
            $post->img = $imgPath;
            $post->user_id = 1;
            $post->likes = 1;
            $post->save();
            return response()->json($post, 201);
        }catch(Exception $e){
            return response()->json(['message' => 'Error creating post: '. $e->getMessage()], 500);
        }
    }

   

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $post = Post::find($id);
        $post->update($request->all());
        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        
        Post::destroy($id);
        
        return response()->json(null, 204);
        
    }
}
