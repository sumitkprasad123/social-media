import React from 'react'
import "./register.css"

const Register = () => {
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
                    <input type="text" placeholder="Username" className="loginInput" />     
                    <input type="email" placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Password" className="loginInput" />
                    <input type="password" placeholder="Password again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegistrButton">Login your Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register