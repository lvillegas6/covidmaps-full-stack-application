import * as React from 'react'
import peopleTalking from '../assets/static/peopleTalking.png'
import '../assets/style/components/Footer.scss'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='Footer-stroke'>{ ' ' }</div>
            <div className='Footer-content'>
                <div className='container Footer-help'>
                    <img src={peopleTalking} alt='people'/>
                    <div className='Footer-information'>
                        <h3>¡Ayudanos a mejorar!</h3>
                        <p>Si tienes cualquier duda, propuesta o sugerencia háznoslo saber en:
                            <span>support@covidmaps.media</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='Footer-strokeBottom'>{ ' ' }</div>
        </footer>
    )
}
export default Footer
