import "./rightbar.css"
import { Users } from "../../dummyData";
import { Online } from "../online/Online";

export const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return(
      <>
         <div className="birthdayContainer">
              <img className="birthdayImg" src="/assets/gift.png" alt="" />
              <span className="birthdayText"><b>Pola Foster</b> and <b>3 more friends</b> have a birthday today</span>
            </div>

            <img src="/assets/add2.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
             {Users.map(u => (
                <Online key={u.id} user={u}/> 
             )) } 

             

            </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City: </span>
                <span className="rightbarInfoValue">New York </span>
            </div>

            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From: </span>
                <span className="rightbarInfoValue">Denver </span>
            </div>

            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship: </span>
                <span className="rightbarInfoValue">Married </span>
            </div>
        </div>

        <div className="rightbarTitle">User friends</div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/1.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/2.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/3.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>


          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/4.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/5.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/6.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/7.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>

          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/8.jpeg" alt="" />
            <span className="rightbarFollowingName">John Rollow</span>
          </div>
          

        </div>
      </>
      
    )
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
           {profile ? <ProfileRightbar/> : <HomeRightbar />}
        </div>
    </div>
  )
}
