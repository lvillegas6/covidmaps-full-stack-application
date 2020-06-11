import { Router } from 'express'
import { getMunicipalities, getMunicipality } from '../controller/municipalityController'

const router = Router()

router.route('/')
    .get(getMunicipalities)
    
router.route('/:id')
    .get(getMunicipality)

export default router