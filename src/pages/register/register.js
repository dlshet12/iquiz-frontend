import React, { useState } from "react";
import "./register.css";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button/button";
import Cookies from "js-cookie";
import RegisterField from "../../components/registerTextField/registerTextField";



function Register() {
 const navigate = useNavigate();
 const handleloginback = () => {
    navigate('/');
 }
 const [ firstName , setUserFirstName ] = useState("")
 const [ lastName , setUserLastName ] = useState("")
 const [ role , setUserRole ] = useState("")
 const [password , setUserPassword] = useState("")
 const [email , setUserEmail ] = useState("")

 const handleFirstName = (event) => {
    console.log(firstName);
    setUserFirstName(event.target.value);
    console.log('value is:', event.target.value);
  }
  const handleLastName = (event) => {
    console.log(lastName);
    setUserLastName(event.target.value);
    console.log('value is:', event.target.value);
  }
  const handleEmail = (event) => {
    console.log(email);
    setUserEmail(event.target.value);
    console.log('value is:', event.target.value);
  }
  const handlePassword = (event) => {
    console.log(password);
    setUserPassword(event.target.value);
    console.log('value is:', event.target.value);
  }
  const handleRole = (event) => {
    console.log(role);
    setUserRole(event.target.value);
    console.log('value is:', event.target.value);
  }
 const handleRegister = async() => {
    try{
        const text = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({ firstName : firstName, lastName: lastName, role: role, password: password, email: email }) 

        }
        const response = await fetch('http://localhost:4000/register',text )
        if(response.status === 200){
          const data = await response.json()
          Cookies.set("token", data.token)
          return navigate("/")
        } else {
            return alert("registeration failed")
        }
    }
    catch(err) {
        return alert("register failed");
    }
 }
    return (
        <div className="registercontainer">
            <div className="registerLeftimg">
            </div>
            <div className="registerRight">
                <div>
                    <h1 className="registerTitle">Create Your Account</h1>
                </div>
                <div className="rightsubcontainer">
                    <div>
                        <div className="nametextField">
                            <RegisterField onChange={handleFirstName} type="text" placeholder="First Name" />
                            <RegisterField onChange={handleLastName} type="text" placeholder="Last Name" />
                            </div>
                            <div className="credentialtext">
                                <RegisterField onChange={handleEmail} type="email" placeholder="Email" />
                                <RegisterField onChange={handlePassword} type="password" placeholder="password" />
                                <RegisterField onChange={handleRole} type="text" placeholder="Role" />
                            </div>
                       
                    </div>
                    <div className="buttoncontainer">
                        <Button onButtonClick={handleRegister} title = "Register"/>
                        <div className="ortext">or</div>
                        <Button onButtonClick={handleloginback} isPrimary={false} title="Login"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;