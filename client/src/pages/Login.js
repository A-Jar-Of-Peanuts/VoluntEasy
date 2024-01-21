import React, { useContext, useState } from 'react';
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import "./LoginCSS.css"; 
import logo from './volunteasy.png';

function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const { setUserInfo } = useContext(UserContext);
  
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
    })

    if(response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        navigate('/events')
      })
    } else {
      alert("Your username or password is incorrect");
    }
  }

  async function register(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username: registerUsername, password: registerPassword }),
      headers: {'Content-Type': 'application/json'},
    });
    
    if(response.status === 200) {
      alert("Registration successful."); 
    }
    else 
      alert("Registration failed.");
  }
  

  return (  
    <div className='top'>
      <div className="logo">
      <img src={logo} width="100" 
     height="100"/>
        <div className = "name">
        <h2>VOLUNTEASY</h2>
        <p>BE THE CHANGE</p>
        </div>
      </div>
    <div className='loginAndRegister'>
    <form className = 'login' onSubmit={ login }>
      <div>
        <h2>Login</h2>
        <div>
          <label>
            Username:
            <input type="text" value={loginUsername} onChange={event => setLoginUsername(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={loginPassword} onChange={event => setLoginPassword(event.target.value)} />
          </label>
        </div>
        <div>
          <button className='loginRegistrationButtons'>Login</button>
        </div>
      </div>
    </form>

    <form className = 'register' onSubmit={ register }>
      <div>
        <h2>Register</h2>
        <div>
          <label>
            Username:
            <input type="text" value={registerUsername} onChange={event => setRegisterUsername(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={registerPassword} onChange={event => setRegisterPassword(event.target.value)} />
          </label>
        </div>
        <div>
          <button className='loginRegistrationButtons'>Register</button>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Login;
