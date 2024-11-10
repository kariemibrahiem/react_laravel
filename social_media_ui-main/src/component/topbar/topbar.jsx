import React from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';


const Topbar = () => {
  return (
    <div className='topbarContainer p-3 bg-primary' style={{position:"sticky" ,top:"0" , marginBottom:"10px" , width:"100%" , zIndex:"1000"}}>
        {/*the left section in navbar  */}
            <div className="row flex">
                <div className="col-3 align-items-left">
                    <img src="" alt="" />
                    logo
                </div>
                {/*the centeral section in navbar  */}
                <div className="col-3 gap-1">
                    <div className="d-flex align-items-center " >
                        <SearchIcon style={{position:"absolute"}}/> 
                        <input type="text" placeholder="   search bar" className="form-control" />
                    </div>
                </div>
                {/*the most rignt section in navbar  */}
                <div className="col-6 d-flex justify-content-center" >
                        <div className="row">
                            <div className="col-6">
                                    <div className="topbarLinks d-flex gap-3 align-items-center">
                                        <span className='btn btn-outline-light rounded' style={{padding:"2px 15px"}}><Link className='text-light' style={{textDecoration:"none"}} to="/">home</Link></span>
                                        <span className='btn btn-outline-light rounded' style={{padding:"2px 15px"}}><Link className='text-light' style={{textDecoration:"none"}} to="/profile">profile</Link></span>
                                        <span className='btn btn-outline-light rounded' style={{padding:"2px 15px"}}><Link className='text-light' style={{textDecoration:"none"}} to="/login">login</Link></span>
                                    </div>
                            </div>
                            <div className="col-6">
                                    <div className="topbarIcons d-flex gap-3 ">
                                        <div className="personDev text-light d-flex">
                                                <PersonIcon/>
                                                <small className='bg-danger rounded ' style={{width:"15px" , height:"15px"}}><sup>1</sup></small>
                                        </div>
                                        <div className="notificationDev text-light d-flex">
                                                <NotificationsActiveIcon/>
                                                <small  className='bg-danger rounded ' style={{width:"15px" , height:"15px"}}><sup>1</sup></small>
                                        </div>
                                        <div className="chatDev text-light d-flex">
                                                <ChatIcon/>
                                                <small  className='bg-danger rounded ' style={{width:"15px" , height:"15px"}}><sup>1</sup></small>
                                        </div>
                                    <img src="./assets/person/1.jpeg" style={{width:'85px' ,height:'40px', borderRadius : '50%'}} alt="" />
                                    </div>
                            </div>
                        </div>
                        
                    
                </div>
            </div>
    </div>
  )
}

export default Topbar