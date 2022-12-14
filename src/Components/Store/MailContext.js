import React from 'react'

const MailContext = React.createContext({
    MailSendHandler: (obj) => {},
    Inbox:[],
    SentMailHandler:(token)=>{},
    SentMails:[],
    UpdateInbox:(id)=>{},
    DeleteInbox:(id)=>{},
    DeleteSentMail:(id)=>{}
   
})

export default MailContext