import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Login from './page/login.js';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  return (
    <div className='container'>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={
      <div>
        <form>
          <div className="inputs">
            <div className="text-un">
              <div className="text">Sign up</div>
              <div className="underline"></div>
            </div>
            <label className="email" id="email"><b>Email</b></label>
            <div className="input">
              <input type="email" placeholder='Enter Email' required />
            </div>
            <div className="inputs">
              <label className="username" id="username"><b>Username</b></label>
              <div className="input">
                <input type="text" placeholder='Enter Username' required />
              </div>
            </div>
            <div className="inputs">
              <label className="password" id="password"><b>Password</b></label>
              <div className="input">
                <input type="password" placeholder='Enter Password' minLength="8" required />
              </div>
            </div>
            <div className="enter">
              <p className='terms'>By creating an account you agree to our <a href="#" className='privacy' >Terms & Privacy</a></p>
              <div className='acc-container' >
              <p className='acc' >Already have an account?</p> 
              <p><Link to="/login" className='signin'>   Sign in</Link></p>
            </div>
            </div>
            <div className="submit">
              <button className="btn" type="submit"><b className='signuptext'>Sign Up</b></button>
            </div>
          </div>
        </form>
      </div>
     } />
  </Routes>
</div>
  )
}

export default App;
