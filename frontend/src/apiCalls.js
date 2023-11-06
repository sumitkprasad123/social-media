import axios from "axios";

export const loginCall = async (userCredential,dispatch) => {
    dispatch({type:"Login_START"});
    try{
        const res = await axios.post("http:localhost:8800/api/auth/login", userCredential)
        // const res = await fetch("http//:localhost:8800/api/auth/login",{
        //     method:"POST",
        //     body:JSON.stringify(userCredential),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", payload:err})
    }
};