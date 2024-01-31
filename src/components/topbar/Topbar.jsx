import React from 'react'
import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"

export const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>Facebook</span>
        </div>

        <div className="topbarCentre">
              <div className="searchbar">
                <Search />
                <input placeholder='Search for friends, posts, videos' type="text" className="searchInput" />
              </div>
        </div>

        <div className="topbarRight">
              <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
              </div>

              <div className="topbarIcons">
                <div className="topbarIconItem">
                  <Person />
                  <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                  <Chat />
                  <span className="topbarIconBadge">2</span>
                </div>


                <div className="topbarIconItem">
                  <Notifications />
                  <span className="topbarIconBadge">1</span>
                </div>
              </div>
              <img src="/assets/4.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
