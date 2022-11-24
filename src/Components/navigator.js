import React,{useContext} from 'react'

import './navigator.css'

import { Link,useHistory } from 'react-router-dom'

import AuthContext from './Store/AuthContext'




const Navigator = () => {
    const history = useHistory()
   const authCtx = useContext(AuthContext)
   const LogoutHandler = event => {
    event.preventDefault()
    authCtx.logoutHandler()
    history.replace('/login')
   }
  
    return <div className='navdiv'>
        <Link to='/' className='links' >Compose</Link>
        <Link to='/inbox' className='links'>Inbox</Link>
        <Link to='/sentmail' className='links'>Sent Mail</Link>
        <button type='submit' onClick={LogoutHandler} className='button1'>Logout</button>
    </div>
}

export default Navigator