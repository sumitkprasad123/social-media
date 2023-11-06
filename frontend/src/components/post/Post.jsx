import React, { useEffect, useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import {format} from "timeago.js"
import {Link} from "react-router-dom" 

const Post = ({post}) => {
  const [like,setLike] = useState(post.like)
  const [isLike,setIsLike] = useState(false)
  const [user,setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
     const userFetch = async() => {
       let res = await axios(`http://localhost:8800/api/users?userId=${post.userId}`)
       setUser(res.data)
     }
     userFetch()
  },[post.userId])

  const handleLike = () => {
     setLike(isLike?like-1:like+1)
     setIsLike(!isLike)
  }

  return (
    <div className="post">
        <div className="postwrapper">
            <div className="postTop">
               <div className="postTopLeft">
                  <Link to={`/profile/${user.username}`}>
                     <img src={user.profilePicture || PF+"/noProfile.png"} alt="" className="postProfileImg" />
                  </Link>
                  <span className="postUserName">{user.username}</span>
                  <span className="postDate">{format(post.createdAt)}</span>
               </div>
               <div className="postTopRight">
                  <MoreVertIcon/>
               </div>
            </div>
            <div className="postCenter">
               <span className="postText">{post?.desc}</span>
               <img src={post.img} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png" onClick={handleLike} alt="" className="likeIcon" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjxkG1bKsp8HNX5N8tF_evd57xjVZIJnomg&usqp=CAU" onClick={handleLike} alt="" className="likeIcon" />
                     <span className="postLikeCounter" >{post.likes.length} people like it</span>
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