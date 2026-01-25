import React from 'react'

export const ButtonLink = ({ text, ...props }) => {
    return (
        <a {...props}>
            <span>{text}</span>
        </a>
    )
}
