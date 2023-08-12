import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import '../css/sidePanel.css'
import OptionCard from './OptionCard';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const SidePanel = () => {
  return (
    <div className='sidePanel'>
      <div className='compose-button'>
        <CreateIcon/>
        <h3>Compose</h3>
      </div>
      <div className='options'>
        <OptionCard icon={<InboxIcon/>} option={"Inbox"} isactive={true}/>
        <OptionCard icon={<StarBorderIcon/>} option={"Starred"}/>
        <OptionCard icon={<AccessTimeIcon/>} option={"Snoozed"}/>
        <OptionCard icon={<SendOutlinedIcon/>} option={"Send"}/>
        <OptionCard icon={<DescriptionOutlinedIcon/>} option={"Draft"}/>
        

      </div>
    </div>
  )
}

export default SidePanel
