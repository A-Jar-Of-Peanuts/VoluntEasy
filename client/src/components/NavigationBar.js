import "./NavigationBarCSS.css"

export default function NavigationBar() {
    return (
        <div className="NavigationBar">
            <h1>VOLUNTEASY</h1>
            <button>Home</button>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    ) 
}