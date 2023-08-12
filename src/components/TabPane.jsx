import React from 'react'

const TabPane = ({icon, label,id}) => {
  return (
    <div className="tabPane">
        {icon}
        {id}
        {label}
    </div>
  )
}

export default TabPane
