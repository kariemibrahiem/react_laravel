import React from 'react'
import CardBar from './cardBar'
import OnlineUsers from './onlineUsers'
import {Users} from "../../dummyData";
import ApiUser from '../api_comp/ApiUser';
const HomeRightBar =()=>{
  return (
    <div className="home_rightbar">
        <div className="wrapper  m-2">
            <CardBar/>
            <hr />
            <CardBar/>
            <hr />
            <CardBar/>
            <hr />
        </div>
        {/* <div className="onlines">
          <h4>online friends </h4>
          <div className="onlline_img d-flex gap-4 flex-wrap">
            {Users.map((user)=>(
              <OnlineUsers key={user.id} user={user}/>
            ))}
          
          </div>
        </div>   */}
        <ApiUser/>
    </div>
  )
}
const ProfileRightBar =()=>{
  return(
    <>
      <h1 className='text-primary'>the profile information</h1>
      <div className="userInfo m-3">
        <div className="userinfo_ d-flex align-items-center gap-3">
          <h3 className="userinfokey text-xl bold ">city : </h3>
          <h5 className="userinfovalue text-2xl text-success">new york</h5>
        </div>
        <div className="userinfo_ d-flex align-items-center gap-3">
          <h3 className="userinfokey text-xl bold ">from : </h3>
          <h5 className="userinfovalue text-2xl text-success">madrid</h5>
        </div>
        <div className="userinfo_ d-flex align-items-center gap-3">
          <h3 className="userinfokey text-xl bold ">relationship : </h3>
          <h5 className="userinfovalue text-2xl text-success">single</h5>
        </div>
      </div>
      <hr />
      <div className="userFriends ">
        <div className="userFriend_1 m-4 d-flex align-items-center gap-4" >
          <img style={{width:'95px' ,height:'90px', borderRadius : '20%'}} src="./assets/person/1.jpeg" alt="" />
          <h5>jana</h5>
        </div>
        <div className="userFriend_1 m-4 d-flex align-items-center gap-4" >
          <img style={{width:'95px' ,height:'90px', borderRadius : '20%'}} src="./assets/person/2.jpeg" alt="" />
          <h5>joye</h5>
        </div>
        <div className="userFriend_1 m-4 d-flex align-items-center gap-4" >
          <img style={{width:'95px' ,height:'90px', borderRadius : '20%'}} src="./assets/person/3.jpeg" alt="" />
          <h5>rania</h5>
        </div>
        <div className="userFriend_1 m-4 d-flex align-items-center gap-4" >
          <img style={{width:'95px' ,height:'90px', borderRadius : '20%'}} src="./assets/person/4.jpeg" alt="" />
          <h5>sozy</h5>
        </div>
      </div>
    </>
  )
}
const Rightbar = (props) => {
  
  return (
    <div>
        {props.content  == "home" ? (
          <HomeRightBar />
        ):(
          <ProfileRightBar/>
        )
        }
    </div>
  )
}

export default Rightbar