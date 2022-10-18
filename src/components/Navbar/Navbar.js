import React from 'react'
import RancidLogo from '../../assets/RancidLogo.png'
import './Navbar.css'
import {NavLink, Route} from 'react-router-dom'

// <NavLink to={`/${name}/${id}`}>
// <img src={image} key={id} id={id} className="app-img"/>
// </NavLink>

const Navbar = (props) => {
    return (
        <div className='navBar'>
            <img className='logo' alt='Rancid Tomatillo logo' src={RancidLogo} />
            {!props.isHome && 
            <NavLink to='/'>
                <button onClick={(event) => props.returnHome(event)} className='home-button'>home</button>
            </NavLink>
            }
        </div>
    )
}

export default Navbar

