import React from 'react'
import { ButtonLink } from './ButtonLink'

export const Hero = () =>
{
    return (
        <section id='home' className='hero'>
            <span>Smart Trusted Support</span>
            <h1 className='hero-header'>
                Technology Made Simple for Everyone in Miami.
            </h1>
            <p>Professional and friendly tech support for home and small business. Expert help in Miami.</p>
            <ButtonLink href="tel:17863943353" text='Call now for tech support' className='button-secondary' />

        </section>
    )
}
