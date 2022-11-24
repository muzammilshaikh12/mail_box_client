import React from 'react'

import { useLocation } from 'react-router-dom'

import './EmailDetails.css'

const EmailDetails = () => {
    const Location = useLocation()

    const Mail = Location.state
  return (
    <div className='detaildiv'>
        <span className='span' style={{color:'red'}}>Send By : {Mail.user.email}</span>
        <span className='span' style={{fontStyle:'italic'}}>Received At : {Mail.createdAt}</span>
        <span className='span' style={{marginTop:'3rem'}}>{Mail.content}</span>
    </div>
  )
}

export default EmailDetails
