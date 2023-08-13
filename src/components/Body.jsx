import React from 'react'
import SidePanel from './SidePanel'
import '../css/body.css'
import TabList from './TabList'
import Compose from './Compose'
import { useSelect } from '@mui/base'
import { useSelector } from 'react-redux'

const Body = () => {
  const isOpen=useSelector(store=>store.sidePanel.isOpen)
  return (
    <div className='body'>
        {isOpen&&<SidePanel/>}
      <TabList/>
     
    </div>
    
  )
}

export default Body
