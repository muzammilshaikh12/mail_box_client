import React,{useContext} from "react";

import { Link} from "react-router-dom";

import "./emaillist.css";

import MailContext from "./Store/MailContext";

const EmailList = (props) => {
  const mailCtx = useContext(MailContext)
  const readMail = (event) => {
    mailCtx.UpdateInbox(event.target.id)
  };

  return (
    <section className="container">
      <Link
        to={{
          pathname: "/inbox/emaildetails",
          state: props.props,
        }}
        style={{ textDecoration: "none", color: "black" }}
      
        onClick={readMail}
      >
        <div className="inboxmain" id={props.props.id}>
          {!props.props.read && <span className="inbox"   id={props.props.id}>🔵</span>}
          <span className="inbox" style={{ fontWeight: "bold" }}   id={props.props.id}>
            {props.props.user.email}
          </span>
          <span className="inbox" style={{ fontStyle: "italic" }}   id={props.props.id}>
            {props.props.createdAt}
          </span>
          <span className="inbox"   id={props.props.id}>{props.props.subject}</span>
         </div>
      </Link>
    </section>
  );
};

export default EmailList;
