import React, { Fragment } from "react";

import { Route } from "react-router-dom";

import Signup from "./Components/Pages/signup";

import Header from "./Components/header";

import Footer from "./Components/footer";

import Login from "./Components/Pages/login";

function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='home'>
       <div>Welcome to your MailBox.</div>
      </Route>
      <Footer />
    </Fragment>
  );
}

export default App;
