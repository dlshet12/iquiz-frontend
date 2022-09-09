import React from 'react';
import './login.css';
import TextField from '../../components/textField/textField';
import Button from '../../components/button/button';
function Login() {
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
                <TextField type="text" placeholder="Email"/>
                <TextField type="password" placeholder="Password"/>
              <div>
                <p className="forgotPasswordText">forgot Your Password?</p>
              </div>
            </div>
            <div className="loginButtonContainer">
              <Button onClick={console.log("login succesfull")} title="Login"/>
              
              <Button isPrimary={false} title="Register"/>
            </div>
          </div>
        </div>
      </div>
      <div className="LoginRight"></div>
    </div>
  );
}
export default Login;
