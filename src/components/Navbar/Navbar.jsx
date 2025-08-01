import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/TMovies-logo.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell.png'
import profile_img from '../../assets/profile.png'
import caret_icon from '../../assets/dropdown.png'
import { logout } from '../../firebase'


const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img className='img1' src={logo} alt=""  />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" className='icons'/>
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
