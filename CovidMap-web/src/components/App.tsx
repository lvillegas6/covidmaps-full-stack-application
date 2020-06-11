import React, { useEffect } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Report from '../pages/Report'
import RequestStatus from '../pages/RequestStatus'
import Map from '../pages/Map'
import ReactLoading from 'react-loading';
import AppRouter from './AppRoute'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/data/dataActions'
import '../assets/style/App.scss'
library.add(fab, fas);
export default (): JSX.Element => {
    const loading = useSelector((state: any) => state.data.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    if (loading) {
        return (
            <div className='loading'>
                <ReactLoading type='spinningBubbles' color='#E65C2C' height={'20%'} width={'20%'} />
            </div>
        )
    }

    return (
        <Router>
            <Switch>
                <AppRouter exact path='/' component={Home} />
                <AppRouter exact path='/mapa' component={Map} isLayout={false} />
                <AppRouter exact path='/contactanos' component={About} />
                <AppRouter exact path='/reportar' component={Report} />
                <AppRouter exact path='/reportar/:status/:message' component={RequestStatus} />
                <AppRouter component={NotFound} />
            </Switch>
        </Router>
    )
}
