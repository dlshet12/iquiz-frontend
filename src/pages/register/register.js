import React from "react";
import "./register.css";


function Register() {
    return (
        <div className="container">
            <div className="registerLeftimg">
            </div>
            <div className="registerRight">
                <div>
                    <h1 className="registerTitle">Create Your Account</h1>
                </div>
                <div className="rightsubcontainer">
                    <div>
                        <div className="nametextField">
                            <input className="Ftextfield" type="text" placeholder="First Name" />
                            <input className="Ftextfield" type="text" placeholder="Last Name" />
                            </div>
                            <div className="credentialtext">
                                <input className="Ftextfield" type="text" placeholder="Email" />
                                <input className="Ftextfield" type="text" placeholder="password" />
                                <input className="Ftextfield" type="text" placeholder="Role" />
                            </div>
                       
                    </div>
                    <div className="buttoncontainer">
                        <button className="Ftextfield" style={{backgroundColor:"#F68F00", color:'white', boxShadow:'4px 3px #cdb4b4'}} type="button">Register</button>
                        <div className="ortext">or</div>
                        <button className="Ftextfield" style={{ boxShadow:'4px 3px #cdb4b4'}}  type="button">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;