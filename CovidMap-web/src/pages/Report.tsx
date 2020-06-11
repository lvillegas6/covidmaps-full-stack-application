import React, { useState } from 'react'
import ReactLoading from 'react-loading';
import ReportContainer from './ReportContainer'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterData } from '../redux/data/dataActions'
import '../assets/style/pages/Report.scss'

type formProps = {
    mail: string
    name: string
    contact_date: string
    state: string
    municipality: string
}

const Report: React.FC = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const departments = useSelector((state: any) => state.data.departments)
    const municipalities = useSelector((state: any) => state.data.filterMunicipalities)
    const selecDepartment = useSelector((state: any) => state.data.selecDepartment)
    const status = useSelector((state: any) => state.data.status)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: formProps) => {
        try {
            setLoading(true)
            const position: any = await getCoordinates()
            const response = await fetch('https://api.covidmaps.media/confirm-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    latitude: position.coords.latitude.toFixed(6),
                    longitude: position.coords.longitude.toFixed(6)
                })
            })
            const { status, message } = await response.json()
            setLoading(false)
            history.push(`/reportar/${status}/${message}`)

        } catch (error) {
            history.push(`/reportar/ERROR/${error.message}`)

        }
    }

    const onChange = (e: any) => {
        const department = departments.find((element: any) => element.id === parseInt(e.target.value, 10))
        dispatch(filterData(department))
    }

    if (loading) {
        return (
            <div className='loading'>
                <ReactLoading type='spinningBubbles' color='#E65C2C' height={'10%'} width={'10%'} />
            </div>
        )
    }

    return (
        <ReportContainer
            departments={departments}
            department={selecDepartment}
            municipalities={municipalities}
            status={status}
            onSubmit={onSubmit}
            onChange={onChange}
        />
    )
}

function getCoordinates() {
    return new Promise((resolve: any, reject: any) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
}
export default Report
