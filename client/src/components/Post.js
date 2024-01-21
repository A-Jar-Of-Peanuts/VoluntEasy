import {formatISO9075} from "date-fns";
import "./PostCSS.css"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// AIzaSyAKM57OWoyZpf4reHYd8bVDdY9yj6Nwlm8

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

export default function Post({title, location, description, image, eventTime}) {

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
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
    
            <img src={image} alt="postImg" />
            <div>
                <h2>{title}</h2>
                <p>LOCATION: {location}</p>
                <p>DATE & TIME <time>{formatISO9075(eventTime)}</time> </p>
            </div>
            <p className="description"> {description}</p>
        </div>
    )
}