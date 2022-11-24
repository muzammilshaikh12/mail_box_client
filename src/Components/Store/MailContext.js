import React from 'react'

const MailContext = React.createContext({
    MailSendHandler: (obj) => {},
   
    Inbox:[],
    SentMailHandler:(token)=>{},
    SentMails:[],
    DeleteMailHandler:(id)=>{},
   
})

export default MailContext