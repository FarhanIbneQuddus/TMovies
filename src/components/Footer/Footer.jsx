import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube.png'
import twitter_icon from '../../assets/twitter-sign.png'
import facebook_icon from '../../assets/facebook.png'
import instagram_icon from '../../assets/Instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contace Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Tmovies, Inc.</p>
    </div>
  )
}

export default Footer
