import React, { useState } from 'react';
import './Register.css'; // Import the CSS file
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    axios.post("http://localhost:8080/register",{name,email,password})
    .then((response)=>{
      navigate("/login")
    })
    .catch((error)=>console.log(error))
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
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
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default Register;
