import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios"
const Login = () => {
 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")
    const navigate=useNavigate();

 const handleEmailChange=(e)=>{
    setEmail(e.target.value)
 }
 const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    axios.post("http://localhost:8080/login",{email,password})
    .then((response)=>{
        if(response.data==="success"){
            navigate("/home")
        }
      
    })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <p>Dont have account? <Link to="/register">Register</Link></p>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
