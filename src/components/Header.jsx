import React from 'react'

export const Header = () =>
{
    return (
        <header>
            <img className='logo' src="./public/qts-logo.svg" alt="quick-tech-solutions" />
            <nav className='menu'>
                <ul>
                    <li>Services</li>
                    <li>Why us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='cta'>
                CTA
            </div>
        </header>
    )
}
