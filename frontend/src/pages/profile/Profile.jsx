import React,{ useState,useEffect } from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import axios from "axios";
import {useParams} from "react-router"


const Profile = () => {
  const [user,setUser] = useState({})
  const username = useParams().username; 

  useEffect(() => {
    const userFetch = async() => {
      let res = await axios(`http://localhost:8080/api/users?username=${username}`)
      setUser(res.data)
    }
    userFetch()
 },[username])
console.log({"p":user})
  return (
    <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
               <div className="profileCover">              
                   <img src={user.coverPicture || "/assets/coverPic.jpg"} alt="" className="profileCoverImg" />
                   <img src={user.profilePicture || "/assets/noProfile.jpg"} alt="" className="profileUserImg" />
               </div>
               <div className="profileInfo">
                  <h4 className="profileInfoName"> {user.username}</h4>
                  <span className="profileInfoDesc">{user.desc}</span>
               </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username} />
                <Rightbar user={user}/>
            </div>
        </div>
        
        </div> 
    </>
  )
}

export default Profile