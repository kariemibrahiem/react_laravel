
import React from 'react'
import Share from '../share/share'
// import Post from '../post/post'
// import {Posts} from "../../dummyData";
import Posts from "../api_comp/Posts";
import Post_create from '../api_comp/Post_create';
const Feet = () => {
  return (
    <div>
        {/* <Share/> */}
        <Post_create/>

        {/* <Post/> */}

        {/* {Posts.map((post) => (
            <Post key={post.id} post={post}/>            
        ))} */}
        <Posts/>
        {/* <Post/> */}
        
      
    </div>
  )
}

export default Feet