import React from 'react'
import { ServiceCard } from './ServiceCard'
import { SERVICES } from '../config'
import { ButtonLink } from './ButtonLink'

export const Services = () => {
    return (
        <section id="services" className="services">
            <div className="section-header">
                <h2>How We Can Help You</h2>
                <p>We specialize in solving everyday technology problems for residential homes, with
                    patience and clarity.</p>
            </div>
            <div className="services-grid">
                {SERVICES.map((service) => {
                    return <ServiceCard key={service.id} service={service} />
                })}
            </div>
            <ButtonLink className='button-primary' text='Request a Quote' />
        </section>
    )
}
