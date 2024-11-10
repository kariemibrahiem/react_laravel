import React from 'react'

const OnlineUsers = ( {user} ) => {
  return (
    <div>
        <div className="cont" style={{position:"relative" , maxWidth:"100px"}}>
              <img src={user.profilePicture} style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }} alt="" />
              <span style={{width:"13px" ,height:"13px" , position:"absolute" , top:"0px" , left:"0px" , backgroundColor:"limegreen" , borderRadius:"50%"}}></span>
              <p>{user.username}</p>
          </div>
    </div>
  )
}

export default OnlineUsers