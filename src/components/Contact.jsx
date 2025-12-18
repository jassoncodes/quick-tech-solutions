import React from 'react'

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
                        <li><span className="material-symbols-outlined">
                            call
                        </span><a>+1 786 394 3353</a></li>
                    </ul>

                </div>
                <div className='contact-form'>
                    Contact Form
                </div>
            </div>
        </section>
    )
}
