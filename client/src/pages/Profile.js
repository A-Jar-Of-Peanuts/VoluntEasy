import './Profile.css';
import NavigationBar from '../components/NavigationBar'
import HJPost from "../components/HJPost"
import Post from '../components/Post'
import { useState, useEffect } from 'react';


function Profile() {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);

    return (
        
        <div className='background'>
            <div>
            <NavigationBar />
        </div>
            <h1>USER</h1>

            <div className = "HJ">
                <div className = "posts">
                    <h2>Hosted Events:</h2>
                    {posts.length > 0 && posts.map(post => (
                        <div className = "post">
                        <HJPost {...post} />
                        </div>
                    ))}       
                </div>

                <div className = "posts">
                    <h2>Joined Events:</h2>
                        {posts.length > 0 && posts.map(post => (
                            <div className = "post">
                            <HJPost {...post} />
                            </div>
                        ))}       
                </div>
            </div>
            
        </div>
    );
}
export default Profile;
