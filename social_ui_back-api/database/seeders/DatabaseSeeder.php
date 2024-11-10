<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Database\Factories\PostFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       
        User::truncate();
        // User::create([
        //     'name' => 'administrator',
        //     'email' => 'administrator@example.com',
        //     'password' => '0987654321',
        // ]);
       
   
            Post::create([
                "title" => "post_3",
                "content" => "post content",
                "img"   => "post img",
                "user_id" => 1,
                "likes"=>6
            ]);
    }
}
