import React, { useRef,useState } from 'react'
import "./share.css"
import CollectionsIcon from '@mui/icons-material/Collections';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';
import {AuthContext} from "../../context/AuthContext"
import {useContext} from "react"
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import upload from "../../utils/upload"

const Share = () => {
    const [ file, setFile] = useState(null)
    const {user} = useContext(AuthContext)
    const desc = useRef()
    
    const submitHandler = async(e) => {
        e.preventDefault()
        const url = await upload(file);
        console.log({"u":url})

        const newPost = {
            userId : user._id,
            desc:desc.current.value,
            img:url
        }
        
        try{
            await axios.post(`https://beta-social-media.onrender.com/api/posts`,newPost);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
         
    }
    return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img 
                    className="shareProfileImg" 
                    src={
                     user.profilePicture 
                     || "/assets/noProfile.jpg"
                    } 
                    alt="" />
                <input 
                    type="text"
                    placeholder={"what's in your mind  "+user.username + " ?"} 
                    className="shareInput"
                    ref={desc}
                  />
            </div>
            <hr className="shareHr" />
            
            {file && (
                <div className='shareImgContainer'>
                    <img className='shareImg'  src={URL.createObjectURL(file)} alt="" />
                    <CloseIcon className='shareCancel' onClick={() => setFile(null)}/>
                </div>
            )}

            <form onSubmit={submitHandler} className="shareBottom">
               <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <CollectionsIcon htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>{/* <input style={{display:"none"}} type="file"  onChange={(e) => setFile(e.target.files[0])}/> */}
                        <input style={{display:"none"}} type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <LoyaltyIcon htmlColor='blue' className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor='green' className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <MoodIcon htmlColor='gold' className='shareIcon' />
                        <span className="shareOptionText">Feeling</span>
                    </div>
               </div>
               <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share