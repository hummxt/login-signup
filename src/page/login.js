import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';
import { useState } from 'react';

const login = () => {
  return (
    <div className='container'>
     <div>
      <form>
        <div className='inputs'>
          <div className='text-un'>
           <div className='text'>Log in</div>
           <div className='underline'></div>
          </div>
          <label className='email' id='email'><b>Email</b></label>
          <div className='input'>
            <input type='email' placeholder='Enter Email' required />
          </div>
          <div className='inputs'>
            <label className='password' id='password'><b>Password</b></label>
            <div className='input'>
              <input type='password' placeholder='Password' />
            </div>
            <div className='checkbox'>
            <label>
              <input type='checkbox' name='remember' /> Remember me
            </label>
            </div>
          </div>
          <div className='account'>
            <p> <Link to="/" className='accc' > Don't have an account ? </Link> </p>
            </div>
          <div className='submit'>
            <button className='btn' type='submit'><b>Log in</b></button>
          </div>
        </div>
      </form>
     </div>
     </div>
  )
}

export default login