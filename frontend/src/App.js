import Profile from "./pages/profile/Profile";
import {Routes,Route,Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import "./index.css"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(AuthContext)

  return (
    <Routes>
       <Route path="/" element={user ?<Home/>:<Login/>} />  
       <Route path="/login" element={user?<Navigate replace to="/" />:<Login />} />  
       <Route path="/register" element={user?<Navigate replace to="/" /> : <Register />} /> 
       <Route path="/profile/:username" element={user?<Profile />:<Navigate to="/login"/>}  />
    </Routes>
  );
}

export default App;
