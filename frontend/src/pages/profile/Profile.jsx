import React,{useState,useEffect} from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import axios from "axios";
import {useParams} from "react-router"

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user,setUser] = useState({})
  const username = useParams().username; 

  useEffect(() => {
    const userFetch = async() => {
      let res = await axios(`http://localhost:8800/api/users?username=${username}`)
      setUser(res.data)
    }
    userFetch()
 },[])

  return (
    <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
               <div className="profileCover">              
                   <img src={user.coverPicture || PF+"/coverPic.jpg"} alt="" className="profileCoverImg" />
                   <img src={user.profilePicture || PF+"/noProfile.png"} alt="" className="profileUserImg" />
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