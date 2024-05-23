import React ,{useState}from 'react'
import '../Discover.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const Submithandeler = async (e, email, password) => {
  e.preventDefault(); // Prevent the default form submission
  console.log(email +" "+password)
  try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
          email,
          password
      });
    
     navigate('/')
  } catch (error) {
    const  notify = () =>toast.error('error', {

      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
      notify();
      console.error("Error signing up:", error);
  }

};
  return (
    <>
    <div className="containerlogin">
      <ToastContainer/>
    <div className="form-container" id="login-form">
      <h1 className='loginh'>Login</h1>
      <form onSubmit={(e)=>{
        Submithandeler(e, email, password)
      }} className='formlo'>
        <label className='loginlabel' for="username">Email</label>
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} className='loginin' placeholder='xyz@gmail.com' type="text" id="username" name="username" required/>
        <label className='loginlabel' for="password">Password</label>
        <input  onChange={(e)=>{
          setPassword(e.target.value)
        }}  className='loginin' placeholder='123' type="password" id="password" name="password" required/>
        <button className='loginbt' type="submit">Login</button>
      </form>
      <p className='loginp'>Don't have an account? <Link className='logina' to='/register' id="signup-link">Sign up</Link></p>
    </div>
    </div>
    </>
  )
}

export default Login
