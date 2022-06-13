import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

const Widget = () => {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleleft">
        <FiberManualRecord />
      </div>
      <div className="widgets-articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle ("Linkedin clone with Zeek", "Top News")}
      {newsArticle ("Linkedin clone with Zeek", "Top News")}
      {newsArticle ("Linkedin clone with Zeek", "Top News")}
    </div>
  )
}

export default Widget;