import React from 'react'
import RancidLogo from '../../assets/RancidLogo.png'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
  	<div className='navBar'>
      <div onClick={(event) => props.returnHome(event)} >
        <Link to='/'>
          <img className='logo' alt='Rancid Tomatillo logo' src={RancidLogo} />
        </Link>     
      </div>
      {!props.isHome && 
        <NavLink to='/'>
          <button onClick={(event) => props.returnHome(event)} className='home-button'>home</button>
        </NavLink>
      }
  	</div>
  )
}

export default Navbar

