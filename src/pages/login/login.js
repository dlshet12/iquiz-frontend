import React from 'react';
import './login.css';
import TextField from '../../components/textField/textField';
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
              <button
                className="button primaryButton"
                type="button"
              >
                Login
              </button>
              <button className="button secondaryButton" type="button">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="LoginRight"></div>
    </div>
  );
}
export default Login;
