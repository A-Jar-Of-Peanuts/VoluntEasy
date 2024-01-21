import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import "./CreatePostCSS.css";
import Select from 'react-select';
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';


export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [date, setDate] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const [locations, setLocations] = useState([]);

    const libraries = ['places'];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDn1tR2MkjZwAMsXzBH06QDlON52aWej9M',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

    const googleSearch = (string) => {
        // var sydney = new google.maps.LatLng(-33.867, 151.195);

        // infowindow = new google.maps.InfoWindow();

        // map = new google.maps.Map(
        // document.getElementById('map'), {center: sydney, zoom: 15});

        // var request = {
        //     query: string,
        //     fields: ['name', 'geometry'],
        // };

        // var service = new google.maps.places.PlacesService(map);

        // service.findPlaceFromQuery(request, function(results, status) {
        //       for (var i = 0; i < results.length; i++) {
        //         setLocations(results[i]);
        //       }
        //   });
    }
    const handleCreatePost = () => {

    }

    return (
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
                <Select onChange={googleSearch} options={locations} />

            </div>


            
            <button onClick={(event) => {setSecond(event.target.value)}}>Create Event!</button>
        </div>
    )
}