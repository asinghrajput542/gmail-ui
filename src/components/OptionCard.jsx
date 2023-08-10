import React from 'react'
import '../css/optionCard.css'

const OptionCard = ({icon, option,isactive}) => {
  return (
    <div className='itemCard'>
        <div className={`item ${isactive && 'item-isactive'}`}>
            <span>{icon}</span>
            <span>{option}</span>
        </div>
      
    </div>
  )
}

export default OptionCard
