import Profile from "./pages/profile/Profile";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import "./index.css"

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />  
       <Route path="/login" element={<Login />} />  
       <Route path="/register" element={<Register />} /> 
       <Route path="/profile/:userId" element={<Profile />}  />
    </Routes>
  );
}

export default App;
