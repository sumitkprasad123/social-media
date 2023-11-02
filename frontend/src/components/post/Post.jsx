import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"



const Post = ({post}) => {
  const [like,setLike] = useState(post.like)
  const [isLike,setIsLike] = useState(false)

  const handleLike = () => {
     setLike(isLike?like-1:like+1)
     setIsLike(!isLike)
  }

  return (
    <div className="post">
        <div className="postwrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img src={Users.filter((e) => e.id === post.id )[0].profilePicture} alt="" className="postProfileImg" />
                 <span className="postUserName">{Users.filter((e) => e.id === post.id )[0].username}</span>
                 <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                 <MoreVertIcon/>
              </div>
            </div>
            <div className="postCenter">
               <span className="postText">{post?.desc}</span>
               <img src={post.photo} alt="" className="postImg" />
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