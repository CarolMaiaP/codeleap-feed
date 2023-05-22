import { NewPost } from "../components/Home/NewPost";
import { Post } from "../components/Home/Post";
import '../styles/home.scss'

export function Home(){
  return(
    <div className="container">
      <NewPost />
      <Post />
    </div> 
  )
}