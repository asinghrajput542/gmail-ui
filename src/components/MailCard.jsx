import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import '../css/mailCard.css'
const MailCard = ({msg,name,subject}) => {
  return (
    <div className='MailCard'>
      <div className='iconBody'>
      <InboxOutlinedIcon/>
      <StarBorderOutlinedIcon/>
    
    </div>  
    <div className='nameBody'>
      <p>{name}</p>
    </div>

    <div className='msgBody'>
      <h4>{subject}</h4>
      <p>{msg}</p>
    </div>
      
    </div>
  )
}

export default MailCard
