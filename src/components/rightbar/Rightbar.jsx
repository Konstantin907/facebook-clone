import "./rightbar.css"

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
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/8.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Ariela Fischer</span>
              </li>

              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/3.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">Gabbie Mertens</span>
              </li>


              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/5.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Samantha Morrighan</span>
              </li>



              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/6.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Ema Carlton</span>
              </li>


              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/7.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Thomas N'guyen</span>
              </li>


              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/9.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Sia Mkhiteryan</span>
              </li>


              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/2.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Coriolanus Snow</span>
              </li>

              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                    src="/assets/10.jpeg" 
                    alt="" 
                    className="rightbarProfileImg" 
                    />
                  <span className="rightbarOnline"> </span>
                </div>
                <span className="rightbarUsername">Jane Raven</span>
              </li>

            </ul>
        </div>
    </div>
  )
}
