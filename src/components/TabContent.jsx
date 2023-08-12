import React from 'react'
import '../css/tabContent.css'
import MailCard from './MailCard'

const TabContent = ({msg,name,subject}) => {
  return (
    <div className='tabContent'>
      <MailCard msg={msg} name={name} subject={subject}/>
      <MailCard msg={msg} name={name} subject={subject}/>
      <MailCard msg={msg} name={name} subject={subject}/>
      <MailCard msg={msg} name={name} subject={subject}/>
      <MailCard msg={msg} name={name} subject={subject}/>
      <MailCard msg={msg} name={name} subject={subject}/>
    </div>
  )
}

export default TabContent
