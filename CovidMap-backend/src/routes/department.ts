import { Router } from 'express'
import { getDepartments, getDepartment } from '../controller/departmentController'

const router = Router()

router.route('/')
    .get(getDepartments)

router.route('/:id')
    .get(getDepartment)

export default router