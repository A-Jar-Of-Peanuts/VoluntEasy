import {formatISO9075} from "date-fns";

export default function Post({title, location, description, image, eventTime}) {
    return (
        <div className="Post">
            <img src={image} alt="postImg" />
            <div>
                <h2>{title}</h2>
                <h1>{location}</h1>
                <h1> <time>{formatISO9075(eventTime)}</time> </h1>
            </div>
            <p className="description"> {description}</p>
        </div>
    )
}