import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';

const Widget = () => {
  return (
    <div className='widgets'>
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </div>
  )
}

export default Widget;