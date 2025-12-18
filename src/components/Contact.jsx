import React from 'react'
import { ContactForm } from './ContactForm'

export const Contact = () =>
{
    return (
        <section id='contact' className='contact'>
            <div className="section-header">
                <h3>Get in Touch</h3>
                <h2>Contact Us For A Free Consultation</h2>
            </div>
            <div className='contact-grid'>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <span className="material-symbols-outlined">
                                call
                            </span>
                            <a>+1 786 394 3353</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                alternate_email
                            </span>
                            <a>support@quicktechsolutions.com</a>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                map_pin_heart
                            </span>
                            <a>Based in Miami, Florida</a>
                        </li>
                    </ul>
                    <div className='contact-disclaimer'>
                        <span className="material-symbols-outlined">
                            map
                        </span>
                        <p>
                            We proudly serve residential clients across Kendall, Kendall West, East Kendall, Pinecrest, Coral Gables, South Miami, Coconut Grove, Doral, and Sweetwater.
                        </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    )
}
