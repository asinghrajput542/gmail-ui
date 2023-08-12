import React, { useEffect } from 'react'
import '../css/tab.css'
import TabHader from './TabHader'
import { useState } from 'react'
import TabContent from './TabContent'

const Tab = ({ children}) => {
    console.log(children[0].props)
 const [tabId,setTabId]=useState(1);
 

  return (
    <>
    <div className='tab'>
       {children.map((child) => (
        
            <div className='tab-header' onClick={()=>setTabId(child.props.id)}>
              {
              <TabHader 
                  icon={child.props.icon} 
                  label={child.props.label} 
                  id={child.props.id}
                  isActive={tabId==child.props.id?true:false}


              />
              }
            </div>

       ))}
        </div>

{children.map((child) => (
  tabId == child.props.id &&
            <div className='tab-content'>
            {
              <TabContent 
                  name={child.props.children.props.name} 
                  msg={child.props.children.props.msg}
                  subject={child.props.children.props.subject}
              />
            }
           </div>
           ))}
           </>

   
  )
}

export default Tab