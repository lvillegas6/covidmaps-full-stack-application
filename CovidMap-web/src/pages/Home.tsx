import React from 'react'
import washHands from '../assets/static/washHands.png'
import stayHome from '../assets/static/stayHome.png'
import distancing from '../assets/static/distancing.png'
import '../assets/style/pages/Home.scss';
const Home: React.FC = () => {
    return (
        <section className='Home section'>
            <h2>Consejos utiles</h2>
            <div className='Home-container'>
                <div className='Home-img'>
                    <img src={stayHome} alt='quedateEnCasa' />
                </div>
                <div className='Home-content'>
                    <h3>Quédate en casa</h3>
                    <p>Limita las salidas innecesarias</p>
                </div>
            </div>
            <div className='Home-container'>
                <div className='Home-content'>
                    <h3>Lava tus manos</h3>
                    <p>Lava tus manos frecuentemente, haciendo uso de agua y jabón. Complementa su limpieza con el uso de alcohol y gel para las manos.</p>
                </div>
                <div className='Home-img'>
                    <img src={washHands} alt='quedateEnCasa' />
                </div>
            </div>
            <div className='Home-container'>
                <div className='Home-img'>
                    <img src={distancing} alt='quedateEnCasa' />
                </div>
                <div className='Home-content'>
                    <h3>Practica el distanciamiento social</h3>
                    <p>Si necesitas salir, mantente alejado al menos 1 metro (3 pies) de distancia de otros</p>
                </div>
            </div>
        </section>
    )
}
export default Home
