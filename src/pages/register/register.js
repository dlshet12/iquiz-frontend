import React from "react";
import "./register.css";


function Register() {
    return (
        <div className="container">
            <div className="RegisterRight">
                <div>
                    <h1>Create Your Account</h1>
                   
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
            <div className="RegisterRight">

            </div>
        </div>
    )
}
export default Register;