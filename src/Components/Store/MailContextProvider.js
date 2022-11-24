import React, { useState,useEffect } from "react";

import MailContext from "./MailContext";

import axios from "axios";

const MailContextProvider = (props) => {
  let token = localStorage.getItem("token");
  const [inbox, setInbox] = useState([]);
  
  const sendMailHandler = (obj) => {
    axios
      .post("http://localhost:4000/sendmail", obj, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response);
       
        alert("mail sent");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  useEffect(()=>{
    let token = localStorage.getItem('token')
    const getInboxHandler = () => {
      axios
        .get("http://localhost:4000/getmail", {
          headers: { Authorization: token },
        })
        .then((response) => {
          console.log(response)
          setInbox(response.data.inbox);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getInboxHandler()
  },[token])
  

  const MailDataValue = {
    MailSendHandler: sendMailHandler,
    Inbox: inbox,
   };

 
  return ( 
    <MailContext.Provider value={MailDataValue}>
      {props.children}
    </MailContext.Provider>
  );
};

export default MailContextProvider;
