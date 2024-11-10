import { LinkedCamera, MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import {Users} from "../../dummyData";
import postImg from "../../assets/person/1.jpeg";
import PostImg1 from "../../assets/post/1.jpeg";
import likeImg from "../../assets/like.png";
import heartImg from "../../assets/heart.png";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApiPost = ({post , user }) => {
    const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [Likes, setLikes] = useState(post.likes);
  const likeHandler = ()=>{
    setLikes(isLiked? +Likes - 1 : +Likes + 1);
    setIsLiked(!isLiked);
  }

  const DeletePost = async ()=>{
     await axios.delete(`http://127.0.0.1:8000/api/post.delete/`+post.id).then(()=>{window.location.reload()}).catch(err=>{alert('error')}); 
  }


  const Date = post.created_at;
  return (
    <div className='shadow-lg mt-5 m-2 p-3 rounded'>
        <div className="top">
            <div className="row">
                <div className="left col-6 d-flex align-items-center gap-2">
                    {/* <img src={Users.filter(u=>u.id == post.userId)[0].profilePicture} alt="" style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }} /> */}
                        <img src={postImg} alt="teh post" style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }}  />
                       <div className="d-flex">
                            <span>{user.name}</span>
                            <img src={`http://127.0.0.1:8000/api/post/img/${post.img}`} alt="not success" />
                            <small><sub >{ Date &&  Date.slice(0 , 10)}</sub></small>
                       </div>
                </div>

                <div className="right col-6">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <MoreVert/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={()=>{DeletePost()}}>delete</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
            </div>
        </div>
        <div className="center d-flex flex-column text-left">
            <h2 className='align-self-left m-4'> {post.content}</h2>
            
            <img className='rounded ' src={post.img} alt="" />
        </div>
        <div className="button d-flex justify-content-between p-2">
            <div className="left">
        
            </div>
            <div className="right  ">
                <div className="d-flex  gap-1">
                    <img src={likeImg} onClick={likeHandler} className='btn btn-outline-primary' disabled style={{width:"45px"}} alt="" />
                    <img src={heartImg}  onClick={likeHandler}  className='btn btn-outline-primary' style={{width:"45px"}} alt="" />
                </div>
                <small>{+Likes}likes & {post.likes}comments </small><br />
                
                
            </div>
        </div>
    </div>
  )
}

export default ApiPost;