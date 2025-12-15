import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Children } from 'react'

export const Layout = ({ children }) =>
{
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
