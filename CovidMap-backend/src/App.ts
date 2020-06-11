import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRouter from './routes'
import municipality from './routes/municipality'
import department from './routes/department'
import status from './routes/status'
import register from './routes/register'

export default class App {

    app: Application

    constructor (private port?: number) {
        this.app = express()
        this.setting()
        this.middleware()
        this.routes()
    }

    setting(){
        this.app.set('port', process.env.PORT || this.port || 3000)
    }

    middleware(){
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
     
        this.app.use('/status', status)
        this.app.use('/confirm-email', register)
        this.app.use('/municipalities', municipality)
        this.app.use('/departments', department)
        this.app.use('/', indexRouter)
    }

    listen(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`)
        })
    }
}