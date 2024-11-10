import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import {Users} from "../../dummyData";
import ApiUser from '../api_comp/ApiUser';

const Sidebar = () => {
    
  return (
    <div style={{overflowY:'scroll '}}>
        <div className="sidebarWrapper d-flex flex-column align-items-left p-2 justify-content-center">
            <ul className="sideList d-flex flex-column align-items-center gap-2  ">
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <RssFeedIcon/>
                    <span>feed</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <ChatIcon/>
                    <span>chats</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <SlowMotionVideoIcon/>
                    <span>videos</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <GroupsOutlinedIcon/>
                    <span>groups</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <BookmarksOutlinedIcon/>
                    <span>bookmarks</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <QuizOutlinedIcon/>
                    <span>question</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <WorkHistoryOutlinedIcon/>
                    <span>jobs</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <EventAvailableOutlinedIcon/>
                    <span>events</span>
                </li>
                <li className='d-flex bold bg-light rounded sidebar_list w-100 btn btn-light'>
                    <LocalLibraryOutlinedIcon/>
                    <span>courses</span>
                </li>
            </ul>
            <ul style={{listStyle:'none'}} className='d-flex flex-column gap-2'>
                <li className='btn btn-dark'>show more </li>
                <li><hr /></li>

                    {/* {Users.map((user)=>(
                        <li className='d-flex align-items-center gap-1 text-bold'>
                        <img style={{width:'45px' , height:"45px" , borderRadius:"50%" , fontWeight:"700" }} src={user.profilePicture} alt="" />
                        <span>{user.username}</span>
                    </li>
                    ))} */}
                
                <ApiUser/>          

            </ul>
        </div>
    </div>
  )
}

export default Sidebar;