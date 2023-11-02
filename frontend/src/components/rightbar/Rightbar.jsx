import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ({profile}) => {

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
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
             <div className="rightbarInfoItem">
                <span className="infoKey">City:</span>
                <span className="infoValue">New York</span>
             </div>
             <div className="rightbarInfoItem">
                <span className="infoKey">From:</span>
                <span className="infoValue">Madrid</span>
             </div>
             <div className="rightbarInfoItem">
                <span className="infoKey">Relationship:</span>
                <span className="infoValue">Single</span>
             </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
              <img src="https://www.broomstickwed.com/wp-content/uploads/2022/05/sexy-russian-woman-450x501.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FbNf3tnYKvlCovzxnKtNwjrMoK38KcnzCbB79HSTjCPbD0dhEszQEColIa2bKkz5LPc&usqp=CAU" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://www.broomstickwed.com/wp-content/uploads/2022/05/sexy-russian-woman-450x501.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FbNf3tnYKvlCovzxnKtNwjrMoK38KcnzCbB79HSTjCPbD0dhEszQEColIa2bKkz5LPc&usqp=CAU" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://www.broomstickwed.com/wp-content/uploads/2022/05/sexy-russian-woman-450x501.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FbNf3tnYKvlCovzxnKtNwjrMoK38KcnzCbB79HSTjCPbD0dhEszQEColIa2bKkz5LPc&usqp=CAU" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://www.broomstickwed.com/wp-content/uploads/2022/05/sexy-russian-woman-450x501.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
          <div className="rightbarFollowing">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FbNf3tnYKvlCovzxnKtNwjrMoK38KcnzCbB79HSTjCPbD0dhEszQEColIa2bKkz5LPc&usqp=CAU" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">
                Jhone Carter
              </span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
         {profile?<ProfileRightbar />:<HomeRightbar/>}
       </div>
    </div>
  )
}

export default Rightbar