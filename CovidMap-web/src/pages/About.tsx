import React from 'react'
import useScroll from '../hooks/useScroll'
import '../assets/style/pages/About.scss'
export default () => {
    const titleRef = useScroll<HTMLHeadingElement>(null)
    return (
        <>
            <section className='About section'>
                <h2 ref={titleRef}>Sobre nosotros</h2>
                <div className='About-information container'>
                    <p>
                    Somos un grupo de estudiantes preocupados por la problemática actual.
                    CovidMaps es el primer proyecto del equipo. El objetivo de dicho proyecto es
                    aplicar años de aprendizaje para brindar una experiencia cómoda y sencilla,
                    proporcionando una página capaz de brindar apoyo e información de utilidad
                    que potencie el cuidado y protección frente al virus actual.
                    </p>
                </div>
            </section>
            <section className='About'>
                <h2>Contactanos</h2>
                <div className='About-information container'>
                    <p>Si desea ponerse en contacto, puede hacerlo a través de la siguiente direccion de correo electrónico:</p>
                    <b>Consultas generales y sugerencias: <a href='mailto:support@covidmaps.media'>support@covidmaps.media</a></b>
                    <b>Consultas de negocios: <a href='mailto:bussines@covidmaps.media'>bussines@covidmaps.media</a> </b >
                </div>
            </section>
        </>
    );
};
