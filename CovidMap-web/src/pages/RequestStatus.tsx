import * as React from 'react'
import Card from '../components/Card'
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RequestStatus: React.FC = () => {

    const { status, message } = useParams();

    switch (status) {
    case 'SEND':
        return (
            <Card>
                <FontAwesomeIcon icon={['fas', 'envelope-open-text']} />
                <p>{message}</p>
                <Link className='button' to='/reportar'>Volver</Link>
            </Card>
        )
    case 'AWAIT':
        return (
            <Card>
                <FontAwesomeIcon icon={['fas', 'hourglass-start']} />
                <p>{message}</p>
                <Link className='button' to='/reportar'>Volver</Link>
            </Card>
        )
    case 'OK':
        return (
            <Card>
                <FontAwesomeIcon icon={['fas', 'check']} />
                <p>{message}</p>
                <Link className='button' to='/mapa'>Ver mapa</Link>
            </Card>
        )
    default:
        return (
            <Card>
                <FontAwesomeIcon icon={['fas', 'times']} />
                <p>{message}</p>
                <Link className='button' to='/reportar'>Reintentar</Link>
            </Card>
        )
    }
}
export default RequestStatus
