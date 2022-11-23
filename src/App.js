import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

import Signup from "./Components/Pages/signup";

import Header from "./Components/header";

import Footer from "./Components/footer";

import Login from "./Components/Pages/login";

import Mail from "./Components/Pages/sendmail";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path='/'>
      <Mail />
      </Route>
      </Switch>
      </main>
     <Footer />
    </Fragment>
  );
}

export default App;
