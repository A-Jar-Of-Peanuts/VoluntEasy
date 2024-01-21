import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import "./CreatePostCSS.css";
import Select from 'react-select';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState(null);
    const [latlng, setLatLng] = useState([]);

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [date, setDate] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const navigate = useNavigate();

    async function createPost(ev) {
        ev.preventDefault();
        var concat = (year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second);
         geocodeByAddress(location.label)
             .then(results => getLatLng(results[0]))
             .then(({ lat, lng }) => setLatLng({lat,lng}))

        const data = {
          title: title,
          location: location.label,
          description: description,
          time: concat,
          lat: latlng[0],
          lng: latlng[1],        
        }

      
        const response = await fetch('http://localhost:4000/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include',
        })

        if(response.ok) {
          navigate('/events/');
          alert("post successful!")
        } 
    }  

    return (
      <form onSubmit={createPost}>
        <div className='CreatePost'>
            <div>
                <NavigationBar/>
            </div>
            <h2>Create Volunteering Posting</h2>
            <p>Be the change you want to see in your community!</p>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    placeholder='Change starts here' 
                    onChange={(event) => {setTitle(event.target.value)}}/>
            </div>
            <div>
                <label>Description:</label>
                <textarea 
                    type="text"
                    placeholder='Describe your altruistic vision'
                    onChange={(event) => {setDescription(event.target.value)}}/>
            </div>

            <div>
                Date:
                <input 
                    type="number" 
                    placeholder='YYYY' 
                    onChange={(event) => {setYear(event.target.value)}}/>
                    -
                 <input 
                    type="number" 
                    placeholder='MM' 
                    onChange={(event) => {setMonth(event.target.value)}}/>
                    -
                <input 
                    type="number" 
                    placeholder='DD' 
                    onChange={(event) => {setDate(event.target.value)}}/>
            </div>
            <div>
                Time:
            <input 
                    type="number" 
                    placeholder='HH' 
                    onChange={(event) => {setHour(event.target.value)}}/>
                    :
                <input 
                    type="number" 
                    placeholder='MM' 
                    onChange={(event) => {setMinute(event.target.value)}}/>
                    :
                <input 
                    type="number" 
                    placeholder='SS' 
                    onChange={(event) => {setSecond(event.target.value)}}/>
            </div>


            <div>
                <label>Location:</label>
                <GooglePlacesAutocomplete
                apiKey="AIzaSyDn1tR2MkjZwAMsXzBH06QDlON52aWej9M" 
                selectProps={{
                  location,
                  onChange: setLocation,
                }}
                 />

            </div>


            
        </div>
            <button>Create Event!</button>
      </form>
    )
}
