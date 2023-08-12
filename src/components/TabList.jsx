import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import '../css/tabList.css'
import Tab from './Tab';
import TabPane from './TabPane';
import ContentPane from './ContentPane';
import Compose from './Compose';

const TabList = () => {
  return (
    <>
    <div className='tabList'>
        <Tab>
            <TabPane icon={<InboxOutlinedIcon/>} label={"Primary"} id={1}>
                <ContentPane msg={"Hello how you doin...!?"} name={"Ayush Singh"} subject={"thik ho?"}></ContentPane>
            </TabPane>
            <TabPane icon={<InboxOutlinedIcon/>} label={"Primary 2"} id={2}>
                <ContentPane msg={"Hello how you doin222222...!?"} name={"Ayush Singh"} subject={"thik ho?"}></ContentPane>
            </TabPane> 
            <TabPane icon={<InboxOutlinedIcon/>} label={"Primary 3"} id={3}>
                <ContentPane msg={"Hello how you doin333333...!?"} name={"Ayush Singh"} subject={"thik ho?"}></ContentPane>
            </TabPane>
            <TabPane icon={<InboxOutlinedIcon/>} label={"Primary 4"} id={4}>
                <ContentPane msg={"Hello how you doin44444...!?"} name={"Ayush Singh"} subject={"thik ho?"}></ContentPane>
            </TabPane> 
        </Tab>
      
    </div>
    <div className='compose-body'>
    {/* Hello */}
      <Compose/>
   
  </div>
  </>
  )
}

export default TabList  
