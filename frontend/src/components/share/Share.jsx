import React from 'react'
import "./share.css"
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CollectionsIcon from '@mui/icons-material/Collections';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';

const Share = () => {
  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="https://sohohindipro.com/wp-content/uploads/2022/11/2_girls-dp-sohohindipro.com_.jpg" alt="" className="shareProfileImg" />
                <input type="text" placeholder="what's in your mind" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
               <div className="shareOptions">
                    <div className="shareOption">
                        <CollectionsIcon htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
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
               <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share