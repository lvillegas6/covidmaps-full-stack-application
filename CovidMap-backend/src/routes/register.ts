import { validateEmail, confirmEmail } from '../controller/registerController'
import { Router } from 'express'

const router = Router()

router.route('/')
    .post(confirmEmail)

router.route('/:token')
    .get(validateEmail)

export default router