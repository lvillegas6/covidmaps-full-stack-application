import React from 'react'
import { Link } from 'react-router-dom'

type props = {
    className: string
}

const Nav: React.FC<props> = ({ className }) => {
    return (
        <nav className={className}>
            <Link to='/'>Inicio</Link>
            <Link to='/contactanos'>Contactanos</Link>
            <Link to='/reportar'>Reportar</Link>
        </nav>
    )
}
export default Nav
