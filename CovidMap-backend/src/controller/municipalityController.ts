import { connect } from '../database'
import { Request, Response } from 'express'

const SELECT_ALL = 'SELECT M.id, M.name, M.active, M.recovered, D.id as department FROM Municipality M JOIN Department D ON M.department = D.id'
const SELECT_BY_ID = `${SELECT_ALL} WHERE M.id = ?`

export async function getMunicipalities(req: Request, res: Response){
    try {
        const conn = await connect()
        const [rows] =  await conn.query(SELECT_ALL)
        res.json(rows)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function getMunicipality(req: Request, res: Response){
    try {
        const conn = await connect()
        const [rows] =  await conn.query(SELECT_BY_ID, [req.params.id])
        res.json(rows)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
