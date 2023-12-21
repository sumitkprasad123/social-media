import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"
import {useState,useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext"

const Feed = ({username}) => {

  const [posts,setPost] = useState([])
  const {user} = useContext(AuthContext)
 
  
  useEffect(() => {
    const getData = async() => {
      let res = username
      ? await axios.get(`https://beta-social-media.onrender.com/api/posts/profile/${username}`)
      : await axios.get(`https://beta-social-media.onrender.com/api/posts/timeline/${user._id}`)
      console.log({"res":res.data})
      setPost(res.data.sort((p1,p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
   }
    getData()
    
  },[username,user._id])

  console.log(posts)

  return (
    <div className='feed'>
       <div className="feedWrapper">
          {(!username || username === user.username) && <Share /> }
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