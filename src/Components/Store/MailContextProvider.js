import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import MailContext from "./MailContext";

import axios from "axios";

const MailContextProvider = (props) => {
  let token = localStorage.getItem("token");
  const history = useHistory()
  const [inbox, setInbox] = useState([]);
  const [sentMail, setsentMail] = useState([]);

  const sendMailHandler = (obj) => {
    axios
      .post("http://localhost:4000/sendmail", obj, {
        headers: { Authorization: token },
      })
      .then((response) => {
        alert('Mail Sent')
        getInboxHandler()
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
     
  };

  const getInboxHandler = () => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/getmail", {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response);
        setInbox(response.data.inbox);
        setsentMail(response.data.sent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getInboxHandler();
  }, [token]);

  const UpdateInbox = (id) => {
    axios
      .put(`http://localhost:4000/updateinbox/${id}`)
      .then((response) => {
        console.log(response);
        getInboxHandler()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteInbox = (id) => {
  axios.delete(`http://localhost:4000/deleteinbox/${id}`)
    .then(response=>{
      console.log(response)
      getInboxHandler()
      history.replace('/inbox')
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const DeleteSentMail = (id) => {
    axios.delete(`http://localhost:4000/deletesent/${id}`)
    .then(response=>{
      console.log(response)
      getInboxHandler()
      history.replace('/sentmail')
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const MailDataValue = {
    MailSendHandler: sendMailHandler,
    Inbox: inbox,
    SentMails: sentMail,
    UpdateInbox: UpdateInbox,
    DeleteInbox:DeleteInbox,
    DeleteSentMail:DeleteSentMail
  };

  return (
    <MailContext.Provider value={MailDataValue}>
      {props.children}
    </MailContext.Provider>
  );
};

export default MailContextProvider;
