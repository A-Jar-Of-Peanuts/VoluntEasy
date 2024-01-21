import {formatISO9075} from "date-fns";
import "./PostCSS.css"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {Link} from "react-router-dom"
import {useEffect, useState} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

export default function Post({_id, title, location, description, eventTime, lat, lng}) {

    const libraries = ['places'];

    const mapContainerStyle = {
        width: '42.7vw',
        height: '50vh'
    };
    const [center, setCenter] = useState({
        lat: Number(lat), // default latitude
        lng: Number(lng), // default longitude
    });

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAKM57OWoyZpf4reHYd8bVDdY9yj6Nwlm8',
        libraries,
      });

      useEffect(() => {
        (async () => {
          const sleep = n => new Promise(resolve => setTimeout(resolve, n));
          while (!window.google) {
            await sleep(1000)
          }
          geocodeByAddress(location)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => setCenter({lat, lng}));
        })()
      }, []);
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

      
    return (
        <div className="Post">
             <div className='map'>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}>
                    <Marker position={center} />
                </GoogleMap>
            </div>
            <hr className="seperator"></hr>
            <div>
                <Link to={`/post/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h2>{title}</h2>
                </Link>
                <p>LOCATION: {location}</p>
                <p>DATE & TIME <time>{eventTime ? formatISO9075(new Date(eventTime.replace(' ', 'T'))) : 'No time provided'}</time> </p>            </div>
            <p className="description"> {description}</p>
            <button className="postButton">JOIN EVENT</button>
        </div>
    )
}
