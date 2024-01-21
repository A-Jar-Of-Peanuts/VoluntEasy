import React, { useContext, useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import "./CreatePostCSS.css";
import Select from 'react-select';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

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
    const {userInfo} = useContext(UserContext);


    async function createPost(ev) {
        var data;
        var response;
        ev.preventDefault();
        var concat = (year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second);
        data = {
          title: title,
          location: location.label,
          description: description,
          time: concat,
          lat: latlng[0],
          lng: latlng[1],        
        }
         response = await fetch('http://localhost:4000/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include',
        });
        if(response.ok) {
          const responseBody = await response.json();
          const updateData = {
            user_id: responseBody.author,
            post_id: responseBody._id, 
          }
          var user = await fetch('http://localhost:4000/update-created', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData),
            credentials: 'include',
          })
          if(user.ok) {
            navigate('/events/');
            alert("post successful!")
          }
        } 
    }  

    return (
      <form onSubmit={createPost}>
        <div className='CreatePost'>
            <div>
                <NavigationBar/>
            </div>
            <h2 id="volunteerPosting">Create Volunteering Posting</h2>
            <p id="BETHECHANGE">Be the change you want to see in your community!</p>

            <div className="entry">
            <div>
                <label>Title:</label>
                <br></br>
                <input 
                    type="text" 
                    placeholder='Change starts here' 
                    onChange={(event) => {setTitle(event.target.value)}}/>
            </div>
            <div>
                <label>Description:</label>
                <br></br>
                <textarea 
                    type="text"
                    placeholder='Describe your altruistic vision'
                    onChange={(event) => {setDescription(event.target.value)}}/>
            </div>

            <div>
                Date:
                <br></br>
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
                <br></br>
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
                <br></br>
                <GooglePlacesAutocomplete
                apiKey="AIzaSyDn1tR2MkjZwAMsXzBH06QDlON52aWej9M" 
                selectProps={{
                  location,
                  onChange: setLocation,
                }}
                 />

            </div>


            
            <button id="createEventButton">Create Event!</button>
            </div>

        </div>
      </form>
    )
}
