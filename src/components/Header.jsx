import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@mui/material';
import gmail from '../assets/gmail-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../css/header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='left_header'>
            <IconButton>
            <ReorderIcon/>
            </IconButton>
            <img alt="logo"
                src={gmail}
            />
      </div>
      <div className='mid_header'>
        <div className='search_mail'>
      <SearchIcon/>
      <input type='text' placeholder='Search Mail'/>
      </div>
      </div>
      <div className='right_header'>

            <HelpOutlineIcon/>
            <SettingsIcon/>
            <AppsIcon/>
            <AccountCircleIcon/>


      </div>
    </div>
  )
}

export default Header
