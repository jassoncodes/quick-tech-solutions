import React from 'react'
// import image from '../assets/images/personlized-attention.jpg'
import { WHYUS } from '../config'
import { WhyCard } from './WhyCard'


export const WhyUs = () =>
{
    return (
        <section id="why-us" className='why-section'>
            <div className="section-header">
                <h2>Why Choose Quick Tech Solutions</   h2>
            </div>
            <div className='why-grid'>
                {
                    WHYUS.map((whyInfo) =>
                    {
                        return <WhyCard key={whyInfo.id} whyInfo={whyInfo} />
                    })
                }
            </div>
        </section>
    )
}
