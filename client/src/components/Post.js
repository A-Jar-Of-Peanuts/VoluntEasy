import {formatISO9075} from "date-fns";
import "./PostCSS.css"

export default function Post({title, location, description, image, eventTime}) {
    return (
        <div className="Post">
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