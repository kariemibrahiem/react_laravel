import React from 'react'
import Topbar from '../../component/topbar/topbar'
import Sidebar from '../../component/sidebar/sidebar'
import Feet from '../../component/feet/feet'
import Rightbar from '../../component/rightbar/rightbar'

const Profile = () => {
  return (
    <>
        <Topbar/>
        <div className="containe  ">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <div className="top col-11 d-flex flex-column align-items-center" >
                        <img src="./assets/post/3.jpeg" className='rounded' style={{width:"930px" , height:"300px"}} alt="" />
                        <img src="./assets/person/7.jpeg" style={{width:'185px' , position:"relative" , top:"-90px",height:'190px', borderRadius : '50%'}} alt="" />
                        <div className="profInfo" style={{position:"relative" , top:"-80px"}}>
                            <h1>name</h1>
                            <p>the profile desc</p>
                        </div>
                    </div>
                    <div className="bottom row">
                        <div className="col-9">
                            <Feet/>
                        </div>
                        <div className="col-3">
                            <Rightbar content="profile"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Profile