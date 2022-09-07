import { Routes, Route } from "react-router-dom";
import React  from "react";
import Login from "./pages/login/login";

// import Register from "./pages/register/register";

import './App.css';


function App() {
  return (
   <Routes>
    <Route exact path = "/" component = {<Login/>}/>
    {/* <Route path = "/Register" element = { <Register/>} /> */}

   </Routes>
  )
}

export default App;

