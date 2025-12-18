import React from 'react'
import image from '../assets/images/personlized-attention.jpg'

export const WhyUs = () =>
{
    return (
        <section className='why-section'>
            <h2>Why Choose Quick Tech Solutions</h2>
            <div className='why-grid'>
                <div className='why-card'>
                    <div>
                        <span className="material-symbols-outlined">wifi</span>
                        <h3>Personalized Attention</h3>
                        <p>We provide personalized computer and technical support for homes and small businesses in Kendall, Pinecrest, Miami, and surrounding areas. Every client receives one-on-one attention, clear explanations, and solutions tailored to their specific technology needs.</p>
                    </div>
                    <img src={image} />
                </div>
                <div className='why-card'>
                    <div>
                        <h3>Personalized Attention</h3>
                        <p>We provide personalized computer and technical support for homes and small businesses in Kendall, Pinecrest, Miami, and surrounding areas. Every client receives one-on-one attention, clear explanations, and solutions tailored to their specific technology needs.</p>
                    </div>
                    <img src={image} />
                </div>
            </div>
        </section>
    )
}
