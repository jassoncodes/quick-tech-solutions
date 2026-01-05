import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export const Contact = () =>
{

    return (
        <section id='contact' className='contact'>
            <div className="section-header">
                <h3>Get in Touch</h3>
                <h2>Contact Us For A Free Consultation</h2>
            </div>
            <div className='contact-grid'>
                <ContactInfo />
                {/* <ContactForm /> */}
            </div>
        </section>
    )
}
