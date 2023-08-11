import React from 'react'
import '../css/tab.css'

const TabHader = ({icon,label,isActive}) => {
  return (
    <div className={`tab ${isActive && 'tab-active'}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}

export default TabHader
