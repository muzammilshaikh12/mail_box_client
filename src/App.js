import React, { useContext } from "react";

import { Route, Switch, Redirect} from "react-router-dom";

import Signup from "./Components/Pages/signup";

import Header from "./Components/header";

import Footer from "./Components/footer";

import Login from "./Components/Pages/login";

import Mail from "./Components/Pages/sendmail";

import AuthContext from "./Components/Store/AuthContext";

import MailContextProvider from "./Components/Store/MailContextProvider";



import Inbox from "./Components/Pages/Inbox";

import SentMail from "./Components/Pages/sentmail";

import EmailDetails from './Components/EmailDetails'

function App() {
  const Authctx = useContext(AuthContext);
  return (
    <MailContextProvider>
      <Header />
      
      <main>
        <Switch>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          {Authctx.isLoggedIn && (
            <Route path="/" exact>
              {" "}
              <Mail />
            </Route>
          )}
          {Authctx.isLoggedIn && <Route path="/inbox" exact>
            <Inbox />
          </Route> }
          <Route path='/inbox/emaildetails' exact>
         <EmailDetails />
          </Route>
          <Route path="/sentmail" exact>
            <SentMail />
          </Route>
           <Route path='*'><Redirect to='/login'/></Route>
        </Switch>
      </main>
      <Footer />
    </MailContextProvider>
  );
}

export default App;
