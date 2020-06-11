import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<props> = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);

type props = { children: React.ReactNode }
export default Layout

