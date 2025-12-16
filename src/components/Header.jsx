import React from 'react'
import { useState } from 'react'

export const Header = () =>
{
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () =>
    {
        setOpen((isOpen) => !isOpen);
    }

    return (
        <header>
            <img className='logo' src="./public/qts-logo.svg" alt="quick-tech-solutions" />
            <button onClick={handleOpenMenu} aria-controls='navBar' className='toggle-menu'>
                <span class="material-symbols-outlined">
                    menu
                </span>
            </button>
            <nav className='menu' id='navBar'>

                <ul className={`menu-list ${open ? "open" : ""}`}>
                    <li>Services</li>
                    <li>Why us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button className='cta'>
                CTA
            </button>
        </header>
    )
}
