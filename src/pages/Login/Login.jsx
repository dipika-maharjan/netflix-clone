import React, { useState } from 'react'
import '../Login/Login.css';
import logo from '../../assets/logo.png';
import background_banner from '../../assets/background_banner.jpg';

const Login = () => {

    const [signState, setSignState] = useState("Sign In");


  return (
    <div className='login' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background_banner})`}}>
      <img src={logo} alt="Logo" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
            {signState === "Sign Up" ? <input type="text" placeholder='Your name' />: null}
            
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>{signState}</button>
            <div className="form-help">
                <div className="remember">
                    <input type="checkbox" id='remember-me' />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div className="need-help">
                    <p>Need Help?</p>
                </div>
            </div>
        </form>
        <div className="form-switch">
            {signState === "Sign In" ? 
            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign up now.</span></p> 
            : <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign in.</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
