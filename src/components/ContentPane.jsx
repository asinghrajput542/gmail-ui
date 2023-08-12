import React from 'react'

const ContentPane = ({msg,name,subject}) => {
  return (
    <div className='contentPane'>
        {msg}
        {name}
        {subject}
      
    </div>
  )
}

export default ContentPane
