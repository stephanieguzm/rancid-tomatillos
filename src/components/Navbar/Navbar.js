import React from 'react'
import RancidLogo from '../../assets/RancidLogo.png'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className='navBar'>
            <img className='logo' alt='Rancid Tomatillo logo' src={RancidLogo} />
            {props.selectedMovie && 
                <button onClick={(event) => props.returnHome(event)} className='home-button'>home</button>}
        </div>
    )
}

export default Navbar

