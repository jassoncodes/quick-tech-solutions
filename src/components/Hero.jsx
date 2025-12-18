import React from 'react'
import { Button } from './Button'

export const Hero = () =>
{
    return (
        <section className='hero'>
            <span className='hero-slogan'>Smart. Trusted. Support.</span>
            <h1 className='hero-header'>
                Technology Made Simple for Everyone in Miami.
            </h1>
            <p>Professional and friendly tech support for home and small business. Expert help in Miami.</p>
            <Button text='Call now for tech support' className='button-secondary' />

        </section>
    )
}
