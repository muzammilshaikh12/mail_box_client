import React, { Fragment } from "react";

import {Link} from 'react-router-dom'

import "./signup.css";

const Signup = () => {
  const UserDetails = (event) => {
    event.preventDefault();
    if (event.target.password.value !== event.target.confirm_password.value) {
      alert("Passwords did not match");
      event.target.email.value = "";
      event.target.password.value = "";
      event.target.confirm_password.value = "";
     } else {
    fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(result=> {
        event.target.email.value = "";
        event.target.password.value = "";
        event.target.confirm_password.value = "";
        if(result.ok) {
        console.log(result)
        }
    })
    .catch(err=>{
        console.log(err)
    })
    }

  };
  return (
    <Fragment>
      <div className="signup-header">
        <div>
          <h3 className="header">Sign Up</h3>
        </div>
        <form className="form" onSubmit={UserDetails}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            name="confirm_password"
            required
          />
          <div className="button">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="login-footer">
        <span>Have an account?</span>
        <Link to='/login' className="link">Login</Link>
      </div>
    </Fragment>
  );
};

export default Signup;
