import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
         <ul className="sidebarList">
            <li className="sidebarListItem">
               <RssFeedIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
               <ChatIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
               <PlayCircleIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
               <PeopleAltIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
               <BookmarksIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
               <HelpOutlineIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
               <WorkIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
               <EventIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
               <SchoolIcon className='sidebarIcon'/>
               <span className="sidebarListItemText">Courses</span>
            </li>
         </ul>
         <button className="sidebarButton">Show More</button>
         <hr className='sidebarHr'/>
         <ul className="sidebarFriendList">
           {Users.map((f) => {
             return <CloseFriend key={f.id} friend={f} />
           })}
          
         </ul>
      </div>
       
    </div>
  )
}

export default Sidebar