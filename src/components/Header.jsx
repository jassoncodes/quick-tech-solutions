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
                <button aria-labelledby='Menu Toggle Button' className='toggle-menu'>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
            </nav>
            <div className='cta'>
                CTA
            </div>
        </header>
    )
}
