import React, { useEffect, useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import {format} from "timeago.js"
import {Link, useParams} from "react-router-dom" 
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext"

const Post = ({post}) => {
  const [like,setLike] = useState(post.likes.length)
  const [isLike,setIsLike] = useState(false)
  const [user,setUser] = useState({})
  const [openDel,setOpenDel] = useState(false);
  const {username} = useParams()
//   console.log({"param":username})
  const {user:currentUser} = useContext(AuthContext)

  useEffect(() => {
   setIsLike(post.likes.includes(currentUser._id))
  },[currentUser._id,post.likes])

  useEffect(() => {
     const userFetch = async() => {
       let res = await axios(`https://beta-social-media.onrender.com/api/users?userId=${post.userId}`)
       setUser(res.data)
     }
     userFetch()
  },[post.userId])

  const handleLike = async() => {

    try{
       await axios.put(`https://beta-social-media.onrender.com/api/posts/${post._id}/like`,{userId:currentUser._id})
    }catch(err){
      console.log(err)
    }
     setLike(isLike?like-1:like+1)
     setIsLike(!isLike)
  }

  const handleDeleteOpen = () => {
        setOpenDel(!openDel)
  }
  const handleDelete = async() => {
      try{
         await axios.delete(`https://beta-social-media.onrender.com/api/posts/${post?._id}`)
         window.location.reload();
      }catch(err){
         console.log(err)
      }
}
console.log({"PostId":post._id})
  return (
    <div className="post">
        <div className="postwrapper">
            <div className="postTop">
               <div className="postTopLeft">
                  <Link to={`/profile/${user.username}`}>
                     <img src={user.profilePicture || "/assets/noProfile.jpg"} alt="" className="postProfileImg" />
                  </Link>
                  <span className="postUserName">{user.username}</span>
                  <span className="postDate">{format(post.createdAt)}</span>
               </div>
               <div className="postTopRight">
                 {username===currentUser.username?<MoreVertIcon onClick={handleDeleteOpen}/>:null} 
                  { openDel && <div className="optionDel" onClick={()=>setOpenDel(!openDel)}>
                      <CloseIcon className='Cancel'/>
                      <Link className='link' onClick={handleDelete} >Delete the post</Link>
                      <Link className='link' >Edit the post</Link>
                   </div>}
               </div>
            </div>
            <div className="postCenter">
               <span className="postText">{post?.desc}</span>
               <img 
                 src={post.img}
                 alt="" 
                 className="postImg"
                 />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png" onClick={handleLike} alt="" className="likeIcon" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjxkG1bKsp8HNX5N8tF_evd57xjVZIJnomg&usqp=CAU" onClick={handleLike} alt="" className="likeIcon" />
                     <span className="postLikeCounter" >{like} people like it</span>
                </div>
                <div className="postBottomRight">
                   <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Post