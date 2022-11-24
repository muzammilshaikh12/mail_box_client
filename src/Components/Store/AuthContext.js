import React, {useState} from 'react'




const AuthContext = React.createContext({
    token: '',
    isLoggedIn : false,
    loginHandler:(token) => {},
    logoutHandler: () => {}
})

export const AuthContextProvider = props => {
    const InitialToken = localStorage.getItem('token')
   
    const [token,Settoken] = useState(InitialToken)

    const userLoggedIn = !!token
    const Loginhandler = token => {
        Settoken(token)
        localStorage.setItem('token',token)
    }

    const LogoutHandler = () => {
        Settoken(null)
        console.log('kcbscucgsxus')
        localStorage.removeItem('token')
      
    }

    const AuthDataValue = {
        token:token,
        isLoggedIn:userLoggedIn,
        loginHandler:Loginhandler,
        logoutHandler: LogoutHandler
    }

    return <AuthContext.Provider value={AuthDataValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext