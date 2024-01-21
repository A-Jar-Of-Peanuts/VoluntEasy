import Post from '../components/Post'
import NavigationBar from '../components/NavigationBar'
import "./EventsCSS.css"
import { useState, useEffect } from 'react';
function Events() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);
 return (
    <div className = "top">
      <div className = "header">
          <h2 id='volEvents'>VOLUNTEERING EVENTS</h2>
      </div>
      
      <NavigationBar/>
    <div className = "posts">
      {posts.length > 0 && posts.map(post => (
        <div className = "post">
          <Post {...post} />
        </div>
      ))}
    </div>
    </div>
 );
}
export default Events;
