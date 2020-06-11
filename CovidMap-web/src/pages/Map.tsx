import React, { useRef, useEffect } from 'react'
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { useSelector, useDispatch } from 'react-redux';
import { filterData } from '../redux/data/dataActions'
import '../assets/style/pages/Map.scss'
import Nav from '../components/Nav';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9vZ3N0IiwiYSI6ImNrYjFkMHg5ZDAxMHAycG45YXNhemp5N2YifQ.nPbEAd3CUPay7mwfiZrDCg';
let map: mapboxgl.Map

const Map: React.FC = () => {
    const mapboxRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const cases = useSelector((state: any) => state.data.cases)
    const departments = useSelector((state: any) => state.data.departments)
    const selecDepartment = useSelector((state: any) => state.data.selecDepartment)
    const municipalities = useSelector((state: any) => state.data.filterMunicipalities)

    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapboxRef.current || '',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-78.0455901, 4.1743501],
            zoom: 4
        })

        map.addControl(new mapboxgl.NavigationControl());
        cases.forEach((element: { coordinates: LngLatLike, statu: string }) => {
            const popup = new mapboxgl.Popup({ offset: 25 })
                .setText(`Estado sintomatico reportado: ${element.statu}`);

            const el = document.createElement('div');
            el.id = 'marker';

            new mapboxgl.Marker(el)
                .setLngLat(element.coordinates)
                .setPopup(popup)
                .addTo(map);

        })
    }, [cases])

    const onChange = (e: any) => {
        const department = departments.find((element: any) => element.id === parseInt(e.target.value, 10))
        dispatch(filterData(department))
    }

    return (
        <div className='Map-container'>
            <div className='Map-cases'>
                <h3>Rastreador Coronavirus (COVID-19)</h3>
                <p>Coronavirus (COVID-19), que es una enfermedad infecciosa causada por enfermedades respiratorias y síntomas como gripe, tos, fiebre y dificultad para respirar. El 31 de diciembre de 2019, el primer caso se registró en Wuhan, China y luego el virus se propagó por todo el mundial y hasta ahora  se han registrado alrededor de <b>7.010.347</b> casos confirmados desde entonces.</p>
                <div>
                    <select className='Map-select' name='department' onChange={onChange} value={selecDepartment.id}>
                        {departments?.length > 0 && departments.map((element: any) => {
                            return (
                                <option key={element.id} value={element.id}>{element.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='Map-department-total-container'>
                    <div className='Map-col-total'>
                        <span className='Map-total-count'>
                            {selecDepartment && selecDepartment.active}
                        </span>
                        <span className='Map-total-label'>Activos</span>
                    </div>
                    <div className='Map-col-total'>
                        <span className='Map-total-count'>
                            {selecDepartment && selecDepartment.recovered}
                        </span>
                        <span className='Map-total-label'>Recuperados</span>
                    </div>
                </div>
                <div className='Map-bottom-line'>{}</div>
                {
                municipalities?.length > 0 && municipalities.map((element: any) => {
                        return (
                            <div key={element.id} className='Map-city-total-container'>
                                <div className='Map-col-total'>
                                    <span className='Map-total-city'>{element.name}</span>
                                </div>
                                <div className='Map-col-total'>
                                    <span className='Map-total-count'>
                                        {element.active}
                                    </span>
                                    <span className='Map-total-label'>Activos</span>
                                </div>
                                <div className='Map-col-total'>
                                    <span className='Map-total-count'>
                                        {element.recovered}
                                    </span>
                                    <span className='Map-total-label'>Recuperados</span>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='mapbox-container'>
                <div className='mapBox mapboxgl-map' ref={mapboxRef} />
                <Nav className='map-nav' />
            </div>
            <Nav className='map-nav-bottom' />
        </div>
    )
}

export default Map
