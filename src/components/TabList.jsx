import React from 'react'
import TabHader from './TabHader'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import '../css/tabList.css'
import TabContent from './TabContent';
const TabList = () => {
  return (
    <div className='tabList'>
        <TabHader icon={<InboxOutlinedIcon/>} label={"Primary"} isActive={true} />
         {/* <TabContent content={"hello boddy tab1"}/> */}
        <TabHader icon={<InboxOutlinedIcon/>} label={"Primary"}  />
        {/* <TabContent content={"hello boddy tab2"}/> */}
      
        <TabHader icon={<InboxOutlinedIcon/>} label={"Primary"}  />
        {/* <TabContent content={"hello boddy tab3"}/> */}
      
    </div>
  )
}

export default TabList  
