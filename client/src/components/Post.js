import {formatISO9075} from "date-fns";
import "./PostCSS.css"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {Link} from "react-router-dom"

export default function Post({_id, title, location, description, eventTime, lat, lng}) {

    const libraries = ['places'];

    const mapContainerStyle = {
        width: '42.7vw',
        height: '50vh'
    };
    const center = {
        lat: Number(lat), // default latitude
        lng: Number(lng), // default longitude
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAKM57OWoyZpf4reHYd8bVDdY9yj6Nwlm8',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

      
    return (
        <div className="Post">
             <div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}>
                    <Marker position={center} />
                </GoogleMap>
            </div>
            <hr className="seperator"></hr>
            <div>
                <Link to={`/post/${_id}`}>
                  <h2>{title}</h2>
                </Link>
                <p>LOCATION: {location}</p>
                <p>DATE & TIME <time>{eventTime ? formatISO9075(new Date(eventTime.replace(' ', 'T'))) : 'No time provided'}</time> </p>            </div>
            <p className="description"> {description}</p>
            <button className="postButton">JOIN EVENT</button>
        </div>
    )
}
