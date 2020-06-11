import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../components/Layout'

const AppRoute: React.FC<any> = ({ component: Component, isLayout = true, ...rest }) => {

    if (isLayout) {
        return (
            <Route {...rest} render={props => (
                <Layout><Component {...props} /></Layout>
            )}
            />
        )
    }

    return <Route {...rest} render={props => (<Component {...props} />)} />

}
export default AppRoute
