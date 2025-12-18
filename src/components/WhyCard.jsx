import React from 'react'

const getImageUrl = (image) =>
{
    return new URL(`../assets/images/${image}`, import.meta.url).href;
};

export const WhyCard = ({ whyInfo }) =>
{
    return (
        <div className='why-card'>
            <div>
                <span className="material-symbols-outlined">{whyInfo.icon}</span>
                <h3>{whyInfo.title}</h3>
                <p>{whyInfo.description}</p>
            </div>
            <img src={getImageUrl(whyInfo.image)} />
        </div>
    )
}
