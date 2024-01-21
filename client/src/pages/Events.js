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
    
    //<div className = "top">
    //    <div className = "header">
    //        <h2>VOLUNTEERING EVENTS</h2>
    //    </div>
    //    <div>
    //        <NavigationBar/>
    //    </div>
    //    <div className = "posts">
    //        <div className = "post">
    //            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
    //        </div>
    //        <div className = "post">
    //            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
    //        </div>
    //        <div className = "post">
    //            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
    //        </div>
    //        <div className = "post">
    //            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
    //        </div>
    //        <div className = "post">
    //            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
    //        </div>
    //    </div>
    //</div>
 );
}
export default Events;
