import './Profile.css';
import NavigationBar from '../components/NavigationBar'
import HJPost from "../components/HJPost"

function Profile() {

    return (
        
        <div className='background'>
            <div>
            <NavigationBar />
        </div>
            <h1>USER</h1>

            <div className = "HJ">
                <div className = "posts">
                    <h2>Hosted Events:</h2>
                    <div className = "post">
                        <HJPost title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
                    </div>
                </div>

                <div className = "posts">
                    <h2>Joined Events:</h2>
                    <div className = "post">
                        <HJPost title = "NWHacks" location = "UR MOM" description = "DOING YOUR MOM" eventTime='2024-01-20 03:01:50' lng = "49.2606" lat = "49.2606"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Profile;
