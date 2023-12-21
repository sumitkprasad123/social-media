import React from 'react'
import "./online.css"
import { Link } from 'react-router-dom'

const Online = ({user}) => {
   
  return (
      <Link className='link' to={`profile/${user.username}`}>
        <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                  <img src={user.profilePicture?user.profilePicture:"/assets/noProfile.jpg"} alt="" className="rightbarProfileImg" />
                  <span className="rightbarOnline">

                  </span>
              </div>
              <span className='rightbarUsername'>{user.username}</span>
        </li>
      </Link>
  )
}

export default Online