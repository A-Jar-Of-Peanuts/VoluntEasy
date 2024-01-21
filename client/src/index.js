import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { UserContextProvider } from './UserContext';
import Login from './pages/Login'
import Events from './pages/Events'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/events' element={<Events />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/host' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
