import React from 'react';
import { PermMedia , Label , Room , EmojiEmotions } from '@mui/icons-material';

const Share = () => {
    
  return (
    <div className='m-2 p-4 shadow-lg rounded' style={{border:'1px white solid'}}>
        <div className="shareTop">
            <img src="./assets/person/1.jpeg" alt="" style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }} />
            <input className='form-control m-2' placeholder='share something'/>
        </div>
        <hr style={{fontSize:"20px"}}/>
        <div className="sharebotton">
            <div className="shareOptions d-flex justify-content-evenly">
                <div className="shareOption d-flex justify-content-center gap-3">
                    <span className='btn btn-primary text-center d-flex align-items-center w-100 gap-1'><PermMedia htmlColor='tomato'/>media</span>
                </div>
                <div className="shareOption d-flex justify-content-center gap-3">
                    <span className='btn btn-primary text-center d-flex align-items-center w-100 gap-1'><Label htmlColor='blue'/>tag</span>
                </div>
                <div className="shareOption d-flex justify-content-center gap-3">
                    <span className='btn btn-primary text-center d-flex align-items-center w-100 gap-1'><EmojiEmotions htmlColor='grenn'/>location</span>
                </div>
                <div className="shareOption d-flex justify-content-center gap-3">
                    <span className='btn btn-primary text-center d-flex align-items-center w-100 gap-1'><Room htmlColor='gold'/>feeling</span>
                </div>
            </div>
            <button className='btn btn-success m-3'>share</button>
        </div>
    </div>
  )
}

export default Share