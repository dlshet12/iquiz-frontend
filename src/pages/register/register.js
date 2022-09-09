import React from "react";
import "./register.css";


function Register() {
    return (
        <div className="container">
            <div className="registerLeftimg">
            </div>
            <div className="registerRight">
                <div>
                    <h1>Create Your Account</h1>
                </div>
                <div>
                    <div>
                        <div className="nametextField">
                            <input className="textfield" type="text" placeholder="First Name" />
                            <input className="textfield" type="text" placeholder="Last Name" />
                            </div>
                            <div className="credentialtext">
                                <input className="textfield" type="text" placeholder="Email" />
                                <input className="textfield" type="text" placeholder="password" />
                                <input className="textfield" type="text" placeholder="Role" />
                            </div>
                       
                    </div>
                    <div className="button">
                        <button className="textfield" style={{backgroundColor:"#F68F00", color:'white', boxShadow:'4px 3px #cdb4b4'}} type="button">Register</button>
                        <div>or</div>
                        <button className="textfield" style={{ boxShadow:'4px 3px #cdb4b4'}}  type="button">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;