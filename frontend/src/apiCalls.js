import axios from "axios";

export const loginCall = async (userCredential,dispatch) => {
    dispatch({type:"Login_START"});
    
    try{
        const res = await axios.post("https://beta-social-media.onrender.com/api/auth/login", userCredential)       
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", payload:err.message})
    }
};