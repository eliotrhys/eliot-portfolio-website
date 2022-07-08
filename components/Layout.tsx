// import Nav from './Nav'
import Meta from './Meta'
// import Footer from './Footer'
import React from 'react'

const Layout = ({children} : any) => {
    return (
        <>
        <Meta />
        {/* <Nav /> */}
        <div>
            <main>
                {children}
            </main>
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default Layout