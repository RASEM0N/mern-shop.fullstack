import React, { FunctionComponent } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface PropsType {
    children: React.ReactNode | React.ReactNodeArray
}

const Layout: FunctionComponent<PropsType> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
