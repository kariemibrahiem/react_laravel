
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ApiPost from './post';
import ImgPosts from "../../dummyData";

const Posts = () => {
    const [posts , setPosts] = useState([{"title":"Hello"}, {"title":"World"}]);
    const [User , setUser] = useState([{"title":"Hello"}, {"title":"World"}]);
    const [get , setGet] = useState(1);
    

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/post/index`)
      .then(res => {
        setPosts(res.data.posts);
        
        
         
      })
    },[]);

    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/post/index_user`)
      .then(res=>{
        setUser(res.data.user);
        console.log(res.data.user);
        
      })
    },[]);
      




        
  return (  
    <div>
       {posts.map((post)=>(
        <ApiPost key={post.id} post={post} user={User} />
       ))}
    </div>
  )
}

export default Posts