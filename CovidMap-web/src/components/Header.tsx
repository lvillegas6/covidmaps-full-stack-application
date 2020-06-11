import * as React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/components/Header.scss'
import Nav from './Nav'

const Header: React.FC = () => {

    return (
        <header className='Header'>
            <div className='Header-hero'>
                <div className='Header-nav-container container'>
                    <Link to='/'><h1 className='Header-logo'><span>Covid</span>Maps</h1></Link>
                    <Nav className='Header-navBar' />
                </div>
                <div className='Header-content'>
                    <p>¡Encuentra el foco de contagios <br/> más cercano a solo un click!</p>
                    <Link className='button-hollow' to='/mapa'>Ver Mapa</Link>
                </div>
            </div>
        </header>
    )
}
export default Header
