import { Router } from 'express'
import { getStatus, getStatu } from '../controller/statusController'

const router = Router()

router.route('/')
    .get(getStatus)

router.route('/:id')
    .get(getStatu)

export default router