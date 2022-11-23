import React, { Fragment, useState } from "react";

import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import axios from 'axios'

import './sendmail.css'

const Mail = () => {
  const [EditorValue, setEditorInput] = useState("");
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
      content: EditorValue,
    };
    let token = localStorage.getItem('token')
  axios.post('http://localhost:4000/sendmail', obj, {
    headers: { Authorization: token },
  })
  .then(response=>{
    setEditorInput('')
    event.target.email.value = ''
    console.log(response)
  })
  .catch(err=>{
    console.log(err)
  })
  };
  return (
    <Fragment>
      <form onSubmit={EmailHandler} className='mailform'>
        <input type="email" placeholder="To" name="email" className="tom"/>
        <div className="mailbox">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onContentStateChange={onEditorStateChange}
           name='mail'
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
