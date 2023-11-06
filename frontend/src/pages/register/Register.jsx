import React, { useRef } from 'react'
import "./register.css"
import axios from "axios"

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const handleClick = async(e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match")
        }else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
                passwordAgain:passwordAgain.current.value,
            }
           
            try{
                await axios.post("http://localhost:8800/api/auth/register",user);
            }catch(err){
                console.log(err)
            }
        }

    }

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
                <form className="loginBox" onSubmit={handleClick}>
                    <input type="text" placeholder="Username" className="loginInput" ref={username} required/>     
                    <input type="email" placeholder="Email" className="loginInput" ref={email}  required/>
                    <input type="password" placeholder="Password" className="loginInput" ref={password}  required minLength={"6"}/>
                    <input type="password" placeholder="Password again" className="loginInput" ref={passwordAgain} required minLength={"6"}/>
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegistrButton">Login your Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register