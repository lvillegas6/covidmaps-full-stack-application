import { getCases, getCase } from '../controller'
import { Router } from 'express'

const router = Router()

router.route('/')
    .get(getCases)

router.route('/:id')
    .get(getCase)

export default router