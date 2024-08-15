import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</ScrollLink>
                <RouterLink to="/hire-me" className="desktopMenuListItem">Hire Me</RouterLink> 
                <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</ScrollLink>
            </div>
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</ScrollLink>
                <RouterLink to="/hire-me" className="listItem" onClick={() => setShowMenu(false)}>Hire Me</RouterLink> 
                <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</ScrollLink>
            </div>
        </nav>
    );
}

export default Navbar;
