import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo_s.png';
import './Header.css';

const Header = () => {
        return(
            <div className='font'>
                <header className='flex justify-between'>
                    <img alt='Freedom Synergy Pro' src={Logo} />
                    <div className='flex items-center fw3 f5'>
                        <nav className='flex mr7 list'>
                            <NavLink to="/" className='pr4 light-red no-underline'>Home</NavLink>
                            <NavLink to="/about" className='pr4 hover-light-red'>About</NavLink>
                            <NavLink to="/services" className='pr4 hover-light-red'>Services</NavLink>
                            <NavLink to="/contact" className='hover-light-red'>Contact</NavLink>
                        </nav>
                        <button className='ba br hover-bg-light-red hover-light-gray hover-br ph4 pv3 fw3 mr3'>Become a member</button>
                    </div>
                </header>
            </div>
        )
}

export default Header;