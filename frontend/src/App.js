import Profile from "./pages/profile/Profile";
import {Routes,Route,redirect} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import "./index.css"
import { AuthContext } from "./contex/AuthContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Routes>
       <Route path="/" element={user ?<Home />:<Register/>} />  
       <Route path="/login" element={user?redirect("/"):<Login />} />  
       <Route path="/register" element={user?redirect("/ ") : <Register />} /> 
       <Route path="/profile/:username" element={<Profile />}  />
    </Routes>
  );
}

export default App;
