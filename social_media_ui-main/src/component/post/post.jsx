import { LinkedCamera, MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import {Users} from "../../dummyData";

const Post = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [Likes, setLikes] = useState(post.like);
  const likeHandler = ()=>{
    setLikes(isLiked? Likes - 1 : Likes + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className='shadow-lg mt-5 m-2 p-3 rounded'>
        <div className="top">
            <div className="row">
                <div className="left col-6 d-flex align-items-center gap-2">
                    <img src={Users.filter(u=>u.id == post.userId)[0].profilePicture} alt="" style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }} />
                        <span>{Users.filter(u=>u.id == post.userId)[0].username}</span>
                        <span><sub >{post.date}</sub></span>
                </div>
                <div className="right col-6">
                    <MoreVert/>
                </div>
            </div>
        </div>
        <div className="center d-flex flex-column text-left">
            <h2 className='align-self-left m-4'> {post.desc}</h2>
            <img className='rounded ' src={post.photo} alt="" />
        </div>
        <div className="button d-flex justify-content-between p-2">
            <div className="left">
        
            </div>
            <div className="right  ">
                <div className="d-flex  gap-1">
                    <img src="./assets/like.png  " onClick={likeHandler} className='btn btn-outline-primary' disabled style={{width:"45px"}} alt="" />
                    {/* <img src="./assets/heart.png " className='btn btn-outline-primary' style={{width:"45px"}} alt="" /> */}
                </div>
                <small>{Likes}likes & {post.comment}comments </small><br />
                
                
            </div>
        </div>
    </div>
  )
}

export default Post