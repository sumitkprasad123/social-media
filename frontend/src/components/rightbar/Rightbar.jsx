import React, { useEffect,useState,useContext } from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'
import axios from "axios";
import {Link} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {AuthContext} from "../../context/AuthContext"

const Rightbar = ({user}) => {
  console.log({"u":user})
const [friends,setFriends] = useState([]);
const PF = process.env.REACT_APP_PUBLIC_FOLDER
const {user:currentUser,dispatch} = useContext(AuthContext)
const [followed,setFollowed] = useState(false)
 
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id) )
  },[currentUser, user._id]);

  useEffect(() => {
     const getFriends = async () => {
        try{
          const friendList = await axios(`http://localhost:8800/api/users/friends/${user._id}`)
          setFriends(friendList.data)
        }catch(err){
          console.log(err)
        }
     }
     getFriends()
  },[user])

 const handleClick = async () => {
   try{
     if(followed){
       await axios.put("http://localhost:8800/api/users/" + user._id + "/unfollow",{
         userId:currentUser._id,
       });
       dispatch({type:"UNFOLLOW",payload:user._id})
     }else{
        await axios.put("http://localhost:8800/api/users/" + user._id + "/follow",{
          userId:currentUser._id,
        })
       dispatch({type:"FOLLOW",payload:user._id})
     }
   }catch(err){
    console.log(err)
   }
   setFollowed(!followed)
 };

  const HomeRightbar = () => {
    return(
      <> 
           <div className="birthdayContainer">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfB82dncEe3fHzCCkMs8e57pSPXbhauHK-PU3_b-FvJWnlxhiaHDJ6gIAEwCRgowIpzCE&usqp=CAU" alt="" className="birthdayImg" />
             <span className="birthdayText">
               <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
             </span>
          </div>
          <img src="https://marketing.twitter.com/content/dam/marketing-twitter/apac/en_gb/success-stories/flipkart-bigbillionmuqabla-2021/masthead.jpg.twimg.1920.jpg " alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => {
               return <Online key={u.id} user={u} />
            })}
            
          </ul>
      </>
    )
  }

  const ProfileRightbar = ({profile}) => {
    return (
      <>
        {currentUser.username !== user.username && (
            <button className="rightFollowButton" onClick={handleClick}>
               {followed ? "UnFollow":"Follow"}
               {followed ?<RemoveIcon/> :<AddIcon/>}
            </button>
         )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
             <div className="rightbarInfoItem">
                <span className="infoKey">City:</span>
                <span className="infoValue">{user.city}</span>
             </div>
             <div className="rightbarInfoItem">
                <span className="infoKey">From:</span>
                <span className="infoValue">{user.from}</span>
             </div>
             <div className="rightbarInfoItem">
                <span className="infoKey">Relationship:</span>
                <span className="infoValue">
                {user.relationship === undefined || 1 
                ? "Single"
                :user.relationship === 1
                ?"Married":"-"}</span>
             </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
       
        <div className="rightbarFollowings">
          {friends.map((friend) => {
            
                return <Link to={`/profile/${friend.username}`} style={{textDecoration:"none"}}>
                          <div className="rightbarFollowing">
                                <img src={friend.profilePicture || PF+"/noProfile.png"}
                                  alt=""
                                  className="rightbarFollowingImg"
                                  />
                              <span className="rightbarFollowingName">
                                {friend.username}
                              </span>
                          </div>
                      </Link>
               }
          )}
         
         
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
         {user?<ProfileRightbar />:<HomeRightbar/>}
       </div>
    </div>
  )
}

export default Rightbar