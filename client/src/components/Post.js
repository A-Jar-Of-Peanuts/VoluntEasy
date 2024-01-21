import {formatISO9075} from "date-fns";
import "./PostCSS.css"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Post({title, location, description, eventTime, lat, lng}) {

    const libraries = ['places'];

    const mapContainerStyle = {
        align: 'center',
        width: '48vw',
        height: '50vh',
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
                    zoom={10}
                    center={center}>
                    <Marker position={center} />
                </GoogleMap>
            </div>
            <div>
                <h2>{title}</h2>
                <p>LOCATION: {location}</p>
                <p>DATE & TIME <time>{formatISO9075(eventTime)}</time> </p>
            </div>
            <p className="description"> {description}</p>
            <button >JOIN EVENT</button>
        </div>
    )
}