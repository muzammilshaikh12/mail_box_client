import React,{useContext} from 'react'

import './header.css'

import Navigator from './navigator'

import AuthContext from './Store/AuthContext'

const Header = () => {
    const authCtx = useContext(AuthContext)
    console.log(authCtx.isLoggedIn)
    return <div className="myheader1">
         <h1 className='headertext'>My_MailBox</h1>
        {authCtx.isLoggedIn && <Navigator /> }
    </div>
}
export default Header