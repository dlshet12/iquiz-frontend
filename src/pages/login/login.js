import React from 'react';
import { useState } from 'react';
import './login.css';
import TextField from '../../components/textField/textField';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleEmailChange = (event) => {
    console.log(email);
    setEmail(event.target.value);
    console.log('value is:', event.target.value);
  }
  const handlePasswordChange = (event) => {
    console.log(password);
    setPassword(event.target.value);
    console.log('value is:', event.target.value);
  }
  const handleLogin = async () => {
    try {
      console.log("body:", { email, password: password });
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password, email: email })
      };

      const res = await fetch('http://localhost:4000/login', requestOptions);
      console.log(res);
      if (res.status === 200) {
        Cookies.set("token", res.body.token)
        return navigate("/Categories")
       
      } else {
        return alert("login failed, please check your email and password")
      }

    }
    catch (err) {
      return alert("login failed");
    }
  }
  return (
    <div className="container">
      <div className="LoginLeft">
        <div className="loginLeftSubContainer">
          <div className="loginLogoContainer">
            <h1 className="logo">
              <span>i</span>Quiz
            </h1>
            <p className="heading">Login To Your Account</p>
          </div>
          <div className="loginFormContainer">
            <div className="loginTextFieldsContainer">
              <TextField onChange={handleEmailChange} type="email" placeholder="Email" />
              <TextField onChange={handlePasswordChange} type="password" placeholder="Password" />
              <div>
                <p className="alternativeText">forgot Your Password?</p>
              </div>
            </div>
            <div className="loginButtonContainer">
              <Button onButtonClick={handleLogin} title="Login" />
              <p className="alternativeText">or create a new account</p>
              <Button isPrimary={false} title="Register" />
            </div>
          </div>
        </div>
      </div>
      <div className="LoginRight"></div>
    </div>
  );
}
export default Login;
