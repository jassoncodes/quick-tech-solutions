import React from 'react'
import { Button } from './Button'

export const Hero = () =>
{
    return (
        <section className='hero'>
            <span className='hero-slogan'>Smart. Trusted. Support.</span>
            <h1 className='hero-header'>
                Title
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate quisquam corrupti, quasi provident ducimus reprehenderit, accusamus quibusdam ipsam dolores eveniet excepturi tenetur animi, reiciendis asperiores soluta modi! Doloribus, consectetur.</p>
            <Button text='Call now for tech support' className='button-secondary' />

        </section>
    )
}
