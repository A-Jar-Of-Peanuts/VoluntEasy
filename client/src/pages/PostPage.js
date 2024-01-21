import { UserContext } from "../UserContext"
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import "./PostPage.css"
import HJPost from "../components/HJPost"
import Post from "../components/Post"
export default function PostPage() {
  const{id} = useParams();
  console.log(id);
  console.log("test")
  const [postInfo, setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/post/' + id).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
      })
    })
  }, []);

  if(!postInfo) return '';

  return(
    
    <div className='post-page'>
            <NavigationBar />
            <Post title = {postInfo.title} location = {postInfo.location} description = {postInfo.description} eventTime = {postInfo.time}/>
    </div>
  ) 
}
