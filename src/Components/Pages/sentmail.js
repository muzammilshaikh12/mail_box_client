import React,{useContext} from 'react'

import MailContext from '../Store/MailContext'

import Sentmaillist from '../Sentmaillist'

const SentMail = () => {
const mailCtx = useContext(MailContext)
console.log(mailCtx.SentMails)
const sentMails = mailCtx.SentMails?.map(mail=>{
    return <Sentmaillist props={mail}/>
})
    return <>{sentMails}</>
}

export default SentMail