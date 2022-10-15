import React from 'react'
import './Navbar.css'
import RancidLogo from '../../assets/RancidLogo.png'

const Navbar = () => {
    return(
        <div className='navBar'>
            <img className='logo' src={RancidLogo} />
            <button className='home-button'>home</button> 
        </div>
    )
}

export default Navbar

