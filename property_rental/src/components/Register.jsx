import React, { useState } from 'react';
import '../Discover.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate=useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  

  
const Submithandeler = async (e, userName, email, password) => {
  e.preventDefault(); // Prevent the default form submission
  console.log(userName +" "+email +" "+password)
  try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
          userName,
          email,
          password
      });
      localStorage.setItem("token", response);
      navigate("/login")
  } catch (error) {
      console.error("Error signing up:", error);
  }
};
  return (
    <>
      <div className="containerlogin">
        <div className="form-container" id="signup-form">
          <h1 className='loginh'>Sign Up</h1>
          <form className='formlo' onSubmit={(e) => Submithandeler(e, userName, email, password)}>
            <label className='loginlabel' htmlFor="new-username">Username</label>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className='loginin'
              type="text"
              id="new-username"
              name="new-username"
              required
            />
            <label className='loginlabel' htmlFor="new-email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className='loginin'
              id="new-email"
              name="new-email"
              required
            />
            <label className='loginlabel' htmlFor="new-password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="new-password"
              className='loginin'
              name="new-password"
              required
            />
            <button className='loginbt' type="submit">Sign Up</button>
          </form>
          <p className='loginp'>Already have an account? <Link to='/login' className='logina' id="login-link">Login</Link></p>
        </div>
      </div>
    </>
  );
}

export default Register;
