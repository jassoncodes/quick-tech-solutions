import React from 'react'

export const Button = ({ text, ...props }) =>
{
    return (
        <button {...props}>
            <span>{text}</span>
        </button>
    )
}
