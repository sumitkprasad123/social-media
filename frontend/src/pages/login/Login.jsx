import React, { useContext, useRef } from 'react'
import {AuthContext} from "../../context/AuthContext"
import "./login.css"
import {loginCall} from "../../apiCalls" 
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const email = useRef();
   const password = useRef();
   const navigate = useNavigate()
   const { user,isFetching,error,dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type:"Login_START"});
        loginCall(
            {email:email.current.value,password:password.current.value},
             dispatch
         );
        
     };
  console.log(user)
  console.log({"f":isFetching})
  console.log(error)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">facebook</h3>
                <span className="loginDesc">
                    Connect with friend and the world around you on facebook
                </span>
            </div>
            <div className="loginRight">
                <form onSubmit={handleClick} className="loginBox">
                    <input 
                       placeholder='Email' 
                       type="email" 
                       className="loginInput" 
                       ref={email} 
                       required
                    />
                    <input
                        placeholder='password' 
                        type="password" 
                        className="loginInput"
                        minLength="6" 
                        ref={password} 
                        required
                     />
                    <button className="loginButton" type="submit" disabled={isFetching}>
                       {isFetching ? <CircularProgress size="20px" color="white" />: "Log In"}
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegistrButton" onClick={()=>navigate("/register")}>
                       {isFetching ? <CircularProgress size="20px" color="white" />: "Create a New Account"}                     
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login