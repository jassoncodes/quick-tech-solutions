import React from 'react'

export const ServiceCard = ({ service }) =>
{
    return (
        <div className="service-card">
            <div className="service-icon">
                <span className="material-symbols-outlined">
                    {service.icon}
                </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}
            </p>
        </div>
    )
}
