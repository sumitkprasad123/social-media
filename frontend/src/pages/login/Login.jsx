import React from 'react'
import "./login.css"

const Login = () => {
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
                <div className="loginBox">
                    <input placeholder='Email' type="Email" className="loginInput" />
                    <input placeholder='password' type="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegistrButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login