import logo from './logo.svg';
import './App.css';
import { Route, Routes, redirect } from "react-router-dom";
import { UserContextProvider } from './UserContext';
import Login from './pages/Login'
import Events from './pages/Events'
import Profile from './pages/Profile'



function App() {
  return (
    <UserContextProvider>
      {/* <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/events' element={<Events />} />
        <Route path='/profile' element={<Profile />} />
      </Routes> */}
    </UserContextProvider>
    // <div className="App">
    //     <p>hi</p>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
