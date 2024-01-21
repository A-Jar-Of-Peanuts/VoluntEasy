import "./NavigationBarCSS.css"
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
    const navigate = useNavigate();

    const p = () => {
        navigate("/profile");
    }
    return (
        <div className="NavigationBar">
            <div classname = "ic">
                <h1>VOLUNTEASY</h1>
            </div>
            <div  classname = "ic">
                <button>Home</button>
            </div>
            <div  classname = "ic">
                <button onClick={p}>My Profile</button>
            </div>
            <div  classname = "ic">
                <button>Host Event</button>
            </div>
        </div>
    ) 
}