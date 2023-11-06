import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"
import {useState,useEffect} from "react";

const Feed = ({username}) => {

  const [posts,setPost] = useState([])

 
  
  useEffect(() => {
    const getData = async() => {
      let res = username
      ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
      : await axios.get(`http://localhost:8800/api/posts/timeline/6547b964231ba5fcbccebc8a`)
      console.log({"res":res.data})
      setPost(res.data)
   }
    getData()
    
  },[username])

  console.log(posts)

  return (
    <div className='feed'>
       <div className="feedWrapper">
          <Share />
          {
            posts.map((post) => {
              return <Post key={post._id} post={post} />
            })
          }
    
       </div>
    </div>
  )
}

export default Feed