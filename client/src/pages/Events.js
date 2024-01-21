import Post from '../components/Post'
import NavigationBar from '../components/NavigationBar'
import "./EventsCSS.css"

function Events() {
 return (
    <div className = "top">
        <div className = "header">
            <h2>VOLUNTEERING EVENTS</h2>
        </div>
        <div>
            <NavigationBar/>
        </div>
        <div className = "posts">
            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' />
            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' />
            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' />
            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' />
            <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' />
        </div>
    </div>
 );
}
export default Events;
