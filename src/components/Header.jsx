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

                        <button className='button-primary in-menu'>
                            <span>
                                Call now
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
            <button className='button-primary'>
                <span>
                    Call now
                </span>
            </button>
        </header>
    )
}
