import React,{useContext} from 'react'

import { useLocation } from 'react-router-dom'

import './EmailDetails.css'

import MailContext from './Store/MailContext'

const EmailDetails = () => {
    const Location = useLocation()
    const mailCtx = useContext(MailContext)
    const Mail = Location.state
    
    const deleteHandler = event => {
      mailCtx.DeleteInbox(event.target.id)
    }
  return (
    <div className='detaildiv'>
        <span className='span' style={{color:'red'}}>Sent By : {Mail.user.email}</span>
        <span className='span' style={{fontStyle:'italic'}}>Received At : {Mail.createdAt}</span>
        <span className='span'>Subject :  {Mail.subject}</span>
        <span className='span' style={{marginTop:'3rem'}}>{Mail.content}</span>
        <button className="deletebtn" onClick={deleteHandler} id={Mail.id}>Delete mail</button>
    </div>
  )
}

export default EmailDetails
