import "./feed.css"
import { Post } from "../post/Post"
import { Share } from "../share/Share"
import { Posts } from "../../dummyData"


export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map(po =>(
          <Post key={po.id} post={po}/>
        ))}
        
        
      
      </div>
    </div>
  )
}
