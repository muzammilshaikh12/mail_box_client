import React from 'react'

import { Link } from 'react-router-dom'

const Sentmaillist = (props) => {
    console.log(props)
  return (
    <section className='container'> 
      <Link to={{
              pathname: "/sentmail/sentdetails",
              state: props.props
            }} style={{textDecoration:'none', color:'black'}}>
    <div className="inboxmain" id={props.props.id}>
      <span className='inbox' style={{fontWeight:'bold'}}>{props.props.user.email}</span>
      <span className='inbox' style={{fontStyle:'italic'}}>{props.props.createdAt}</span>
      <span className='inbox'>{props.props.subject}</span>
    </div>
    </Link>
   </section>
  )
}

export default Sentmaillist
