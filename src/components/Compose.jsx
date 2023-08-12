import React from 'react'
import '../css/compose.css'
import ClearIcon from '@mui/icons-material/Clear';

const Compose = () => {
  return (
    <div className='compose'>
        <div className='compose-header'>
            <div className='compose-header-right'>
                <p>New Message</p>
            </div>
            <div className='compose-header-left'>
                <ClearIcon/>

            </div>

        </div>
        <div className='compose-body'>
            <div className='compose-body-form'>
                <input type='email' placeholder='To' />
                <input type='text' placeholder='Subject'/>
                <textarea rows={20} />

            </div>

        </div>
        <div className='compose-footer'>
            <button>Send</button>

        </div>
      
    </div>
  )
}

export default Compose
