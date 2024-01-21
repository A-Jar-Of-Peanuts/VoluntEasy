import "./NavigationBarCSS.css"
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
    const navigate = useNavigate();

    const p = () => {
        navigate("/profile");
    }

    const h = () => {
        navigate("/events");
    }

    const e = () => {
        navigate("/host");
    }

    return (
        <div className="NavigationBar">
            <div classname = "ic">
                <h1>VOLUNTEASY</h1>
            </div>
            <div className="navButtonGroup">
                <div  classname = "ic">
                <button className="navBarButton" onClick={h}>Events</button>
            </div>
            <div  classname = "ic">
                <button className="navBarButton" onClick={p}>My Profile</button>
            </div>
            <div  classname = "ic">
                <button className="navBarButton" onClick={e}>Host Event</button>
            </div>
            </div>
            
        </div>
    ) 
}