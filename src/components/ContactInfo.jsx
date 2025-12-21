import React from 'react'

import { useTypewriter } from '../hooks/Typewriter'
import { CITIES } from '../config'

export const ContactInfo = () =>
{
    const text = useTypewriter({
        texts: CITIES,
        typingDelay: 70,
        pauseDelay: 2000,
        loop: true,
    })

    return (
        <div className='contact-info'>
            <ul>
                <li>
                    <span className="material-symbols-outlined">
                        call
                    </span>
                    <a>+1 786 394 3353</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        alternate_email
                    </span>
                    <a>support@quicktechsolutions.com</a>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        map_pin_heart
                    </span>
                    <a>Based in Miami, Florida</a>
                </li>
            </ul>
            <div className='contact-disclaimer'>
                <span className="material-symbols-outlined">
                    map
                </span>
                <p>
                    <em>We proudly serve residential clients across</em> <em className='serving-areas'>{text}</em>
                </p>
            </div>
        </div>
    )
}
