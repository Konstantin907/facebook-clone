import "./profile.css"
import { Topbar } from "../../components/topbar/Topbar"
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Rightbar } from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export const Profile = () => {
  return (
    <>
           <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img
                        className="profileCoverImg"
                        src="assets/post/3.jpeg"
                        alt=""
                    />
                    <img
                        className="profileUserImg"
                        src="assets/4.jpeg"
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Dora Hawks</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
                </div>
      </div>
   
    </>
  )
}
