import React from 'react'
import logo from '../assets/images/qts-logo.svg'
import { ContactInfo } from './ContactInfo'
import { CITIES } from '../config'

export const Footer = () =>
{
    return (
        <footer>
            <section className='footer-info'>
                <section>
                    <img className='logo' src={logo} alt="quick-tech-solutions" />
                    <p>We provide patient, professional, and jargon-free support right in your home. We make tech work for you.</p>
                </section>
                <section>
                    <h3>Contact Info</h3>
                    <ContactInfo />
                </section>
                <section>
                    <h3>Services Areas</h3>
                    <ul>
                        {CITIES.map((city) => { return <li key={city.toLowerCase()}>{city}</li> })}
                    </ul>
                </section>
            </section>
            <section className='social-copy'>
                <section className='social-media'>Social media</section>
                <span>Quick Tech Solutions &copy; 2026 &#183; developed by <a href='https://github.com/jassoncodes' target='blank'>@jassoncodes</a></span>
            </section>
        </footer>
    )
}
