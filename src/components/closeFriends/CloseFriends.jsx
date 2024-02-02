import "./closeFriends.css"

export const CloseFriends = ( {user} ) => {
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImage" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
