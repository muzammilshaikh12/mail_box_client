import React, { Fragment } from "react";

import {Link, useHistory} from 'react-router-dom'

import axios from 'axios'

import './login.css'

const Login = () => {
  const history = useHistory()
  const LoginHandler = event => {
    event.preventDefault()
 let obj = {
  email : event.target.email.value,
  password : event.target.password.value
 }
axios.post('http://localhost:4000/login',obj)
.then(response=>{
  event.target.email.value = ''
  event.target.password.value = ''
  localStorage.setItem('token', response.data.token)
  history.replace('/home')
})
.catch(err=>{
  alert(err.response.data.message)
})
  }
  return (
    <Fragment>
        <div className="login-header">
        <div>
        <h3 className="header">Login Here</h3>
      </div>
      <div>
        <form className="form" onSubmit={LoginHandler}>
          <input type="email" placeholder="Email" className="input" name='email'/>
          <input type="password" placeholder="Password" className="input" name='password'/>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
        </div>
        <div className="signup-footer">
        <span>Don't Have an account?</span>
        <Link to='/signup' className="link">Signup</Link>
      </div>
     </Fragment>
  );
};

export default Login
