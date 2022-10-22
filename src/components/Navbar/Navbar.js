import React from 'react'
import RancidLogo from '../../assets/RancidLogo.png'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  
  const location = useLocation()
  console.log(location)
  const hasNumber = /\d/
  const isMoviePage = hasNumber.test(location.pathname);  

  return (
  	<div className='navBar'>
      <Link to='/'>
        <img className='logo' alt='Rancid Tomatillo logo' src={RancidLogo} />
      </Link>     
      {isMoviePage && 
        <NavLink to='/'>
          <button className='home-button'>home</button>
        </NavLink>
      }
  	</div>
  )
}

export default Navbar

