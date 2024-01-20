import Post from '../components/Post'
import NavigationBar from '../components/NavigationBar'

function Events() {
 return (
    <div>
        <div>
            <h2>VOLUNTEASY</h2>
        </div>
        <div>
            <NavigationBar/>
        </div>
        <Post title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' />
    </div>
 );
}
export default Events;
