import React, { Fragment, useState, useContext } from "react";

import { Editor } from "react-draft-wysiwyg";

import MailContext from "../Store/MailContext";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import './sendmail.css'

const Mail = () => {
  const Mailctx = useContext(MailContext)
  let [EditorValue, setEditorInput] = useState("");
  const onEditorStateChange = (contentState) => {
    let text = "";
    contentState.blocks.forEach((e) => {
      text += ` ${e.text}`;
    });
    setEditorInput(text);
  };

  const EmailHandler = (event) => {
    event.preventDefault();
   let obj = {
      email: event.target.email.value,
      subject:event.target.subject.value,
      content: EditorValue,
    };
    Mailctx.MailSendHandler(obj)
    event.target.email.value = ''
    event.target.subject.value=''
    setEditorInput('')
   };
  return (
    <Fragment>
      <form onSubmit={EmailHandler} className='mailform'>
        <input type="email" placeholder="To" name="email" className="tom" required/>
        <input type="text" placeholder="Subject" name="subject" className="tom" required/>
        <div className="mailbox">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onContentStateChange={onEditorStateChange}
            editorStyle={{
              border: "1px solid #C0C0C0",
              height: "10rem",
              padding: "8px",
              overflow: "hidden",
            }}
           required
          />
        </div>
        <div className="btn">
          <button type="submit">Send</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Mail;
