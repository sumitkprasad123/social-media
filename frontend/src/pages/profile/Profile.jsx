import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"


const Profile = () => {
  return (
    <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
               <div className="profileCover">              
                   <img src="https://fbcoverstreet.com/thumbnail/UyrukEOo5i7T6MHGTpFES41hPe2RaEwS4DivPQNAHjZDK7UWLfgN2j7a8KeGL6Oz.webp" alt="" className="profileCoverImg" />
                   <img src="https://i.pinimg.com/736x/43/37/33/433733b1ab647e3c80796f0efc568f09.jpg" alt="" className="profileUserImg" />
               </div>
               <div className="profileInfo">
                  <h4 className="profileInfoName"> safak kocaoglu</h4>
                  <span className="profileInfoDesc">hello my friends</span>
               </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
        
        </div> 
    </>
  )
}

export default Profile