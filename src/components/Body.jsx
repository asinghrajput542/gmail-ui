import React from 'react'
import SidePanel from './SidePanel'
import '../css/body.css'
import TabList from './TabList'
import Compose from './Compose'

const Body = () => {
  return (
    <div className='body'>
        <SidePanel/>
      <TabList/>
     
    </div>
    
  )
}

export default Body
