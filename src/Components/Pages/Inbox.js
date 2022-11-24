import React,{useContext} from 'react'

import MailContext from '../Store/MailContext'

import EmailList from '../emaillist'

import './Inbox.css'

const Inbox = () => {
const Mailctx = useContext(MailContext)
console.log(Mailctx.Inbox)

const MyInbox = Mailctx.Inbox?.map(mail=>{
    return <div className='wrapper'>
      <EmailList props={mail}/>
    </div>
})

return <>{MyInbox}</>
}

export default Inbox