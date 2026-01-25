import { useState } from 'react'
import { ButtonLink } from './ButtonLink';
import logo from '../assets/images/qts-logo.svg'

export const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen((isOpen) => !isOpen);
    }

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header>
            <a className='logo-link' href='/'>
                <img className='logo' src={logo} alt="quick-tech-solutions" />
            </a>
            <button onClick={handleOpenMenu} aria-controls='navBar' className='toggle-menu'>
                <span className="material-symbols-outlined">
                    {open ? "close" : "menu"}
                </span>
            </button>
            <nav className='menu' id='navBar'>
                {/* // TODO: menu close animation weird */}
                <ul className={`menu-list${open ? " open" : ""}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#why-us" onClick={closeMenu}>Why us</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    {/* // TODO: on mobile this button has to be centered */}
                    <li className='menu-cta'>
                        <ButtonLink text='Call now' className='button-primary in-menu' />
                    </li>
                </ul>
            </nav>
            <ButtonLink href="tel:17863943353" text='Call now' className='button-primary' />
        </header>
    )
}
