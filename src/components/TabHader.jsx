import React from 'react'
import '../css/tabHeader.css'

const TabHader = ({icon,label,isActive,children}) => {
  return (
    <>
    <div className={`tab-header ${isActive && 'tab-header-active'}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
    {children}
    </>
  )
}

export default TabHader
