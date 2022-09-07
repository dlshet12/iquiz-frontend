import React from "react";
import "./login.css";


function Login() {
    return (
        <div className="container">
            <div className="LoginLeft">
                <div>
                    <h1><span style={{ color: 'black' }}>i</span>Quiz</h1>
                    <p>Login To Your Account</p>
                </div>
                <div>
                    <input className="textfield" type="text" placeholder="Username or Email" />
                    <input className="textfield" type="text" placeholder="Password" />
                    <div ><p className="password">forgot Your Password?</p></div>
                </div>
                <div>
                    <button className="textfield button up"  type="button" style={{ backgroundColor: '#F68F00' }} >Login</button>
                    <button className="textfield button" type="button">Register</button>
                </div>
            </div>
            <div className="LoginRight">

            </div>
        </div>
    )
}
export default Login;













