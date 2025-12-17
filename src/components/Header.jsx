import React from 'react'
import { useState } from 'react'
import { Button } from './Button';
import logo from '../assets/images/qts-logo.svg'

export const Header = () =>
{
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () =>
    {
        setOpen((isOpen) => !isOpen);
    }

    return (
        <header>
            <img className='logo' src={logo} alt="quick-tech-solutions" />
            <button onClick={handleOpenMenu} aria-controls='navBar' className='toggle-menu'>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </button>
            <nav className='menu' id='navBar'>

                <ul className={`menu-list ${open ? "open" : ""}`}>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Why us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <Button text='Call now' className='button-primary in-menu' />
                    </li>
                </ul>
            </nav>
            <Button text='Call now' className='button-primary' />
        </header>
    )
}
