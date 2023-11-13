import React from 'react'
import Video from '../../Images/AboutPageImages/about-us-page-video.mp4';
import '../../styles/AboutPageStyles/DownloadOurApp.css'

function DownloadOurApp() {
  return (
    <div className='download-page-wrapper'>
      <h1>Download Our <span>App</span></h1>

      <video loop muted autoPlay>
        <source src={Video} type='video/mp4'/>
      </video>
    </div>
  )
}

export default DownloadOurApp
