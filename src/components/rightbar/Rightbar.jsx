import "./rightbar.css"
import { Users } from "../../dummyData";
import { Online } from "../online/Online";

export const Rightbar = () => {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
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
        </div>
    </div>
  )
}
