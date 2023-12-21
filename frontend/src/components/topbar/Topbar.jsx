import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from "react-router-dom";
import { useContext, useState } from 'react';
import {AuthContext} from "../../context/AuthContext"
import { LoginSuccess } from "../../context/AuthAction";

const Topbar = () => {
  const [open,setOpen] = useState(false);
const { user,dispatch } = useContext(AuthContext)

 const handleLogout = () => {
      dispatch(LoginSuccess(null)) ;
      localStorage.setItem("currentUser",null);   
 };


  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
           <Link to="/" style={{textDecoration:"none"}}> 
               <span className="logo" >facebook</span>
           </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
               <SearchIcon className='searchIcon'/>
               <input 
                 placeholder="search for friend, post or video"
                 className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                 <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                 </div>
                 <div className="topbarIconItem">
                    <ChatBubbleOutlineIcon/>
                    <span className="topbarIconBadge">2</span>
                 </div>
                 <div className="topbarIconItem">
                    <NotificationsNoneIcon/>
                    <span className="topbarIconBadge">1</span>
                 </div>
            </div>
           
              <div className="user" onClick={() => setOpen(!open)}>
                 <img 
                    src={
                      user.profilePicture
                      ? user.profilePicture
                      :"/assets/noProfile.jpg"
                    } 
                    alt="" 
                    className='topbarImg' />
                   <span className="user_name">{user?.username}</span>
                  { open && <div className="option">
                      <Link className='link' to={`profile/${user.username}`}>Profile</Link>
                      <Link className='link' to="/">Messages</Link>
                      <Link className='link' onClick={handleLogout}>Logout</Link>
                   </div>}
              </div>
        </div>
    </div>
  )
}

export default Topbar