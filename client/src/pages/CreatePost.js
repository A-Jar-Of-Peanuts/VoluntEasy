import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';

export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleCreatePost = () => {

    }

    return (
        <div className='CreatePost'>
            <div>
                <NavigationBar/>
            </div>
            <h2>Create Volunteering Posting</h2>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    placeholder='Title...' 
                    onChange={(event) => {setTitle(event.target.value)}}/>
            </div>
            <div>
                <label>Description:</label>
                <input 
                    type="text"
                    placeholder='Description...'
                    onChange={(event) => {setDescription(event.target.value)}}/>
            </div>
            <div>
                <label>Location:</label>
                <label>Latitude:</label>
                <input
                    type="number"
                    onChange={(event) => {setLatitude(event.target.latitude)}}/>
                <label>Longitude:</label>
                <input 
                    type="number"
                    onChange={(event) => {setLongitude(event.target.longitude)}}/>
            </div>
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    )
}