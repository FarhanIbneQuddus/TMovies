import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/TMovies-logo.png'
import { login, signup } from '../../firebase'
import tmovies_spinner from '../../assets/tmovies_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const user_auth = async (event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState === "Sign In"){
      await login(email,password);
    }else{
      await signup(name, email, password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="login-spinner">
      <img src={tmovies_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==="Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to TMovies? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
