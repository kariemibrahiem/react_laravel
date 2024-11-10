import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiUser = () => {
    const [Users , setUsers]  = useState([{"title":"Hello"}, {"title":"World"}]);
    useEffect(()=>{
         axios.get(`http://127.0.0.1:8000/api/user/index`)
        .then(response =>{
            setUsers(response.data.users);
            console.log(response.data.users);
            
        });
    },[]);
  return (
    <div>
        {
              Users.map((user)=>(
                <li className='d-flex align-items-center gap-3 text-bold'>
                        <img style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }} src={user.img} alt="" />
                        <span>{user.name}</span>
                </li>
              ))
        }
        
    </div>
  )
}

export default ApiUser