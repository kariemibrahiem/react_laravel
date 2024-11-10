import axios, { Axios } from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { useState } from 'react'
import { Await, useNavigate } from 'react-router-dom';

const Post_create = () => {
    const navigate = useNavigate();
    const [title , setTitle] = useState();
    const [content , setcontent] = useState();
    const [img , setimg] = useState();

    const changeImgHandler = (e)=>{
            setimg(e.target.files[0]);
    }
    
    const createPost = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        // formData.append('img', img);
        if (img) {
            formData.append('img', img); // Append image if available
          }
        
            
            try{
                const responce = await axios.post(`http://127.0.0.1:8000/api/post/store` , formData , {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                }).then(()=>{
                    navigate('/');
                    setTitle("");
                    setcontent("");
                    
                });
            }catch(error){
                console.log(error);
                alert("Failed to create post");
            }

            
        }

    return (
        <div className='shadow-lg rounded p-1'>
            <h1 className='text-center text-primary'>share new post</h1>
            <form  className="form-control p-3 d-flex flex-column gap-3"  onSubmit={createPost}>
                <input type="text" className="form-control" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <textarea placeholder="content" className="form-control" value={content} onChange={(e)=>setcontent(e.target.value)} />
                <input type="file" accept="image/*"  onChange={changeImgHandler}  className="form-control"/>
                <button type="submit" className='btn btn-primary'>Create Post</button>
            </form>
           
        </div>
    )

   
}

export default Post_create