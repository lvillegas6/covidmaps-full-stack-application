import { connect } from '../database'
import { Request, Response } from 'express'

const SELECT_ALL = 'SELECT * FROM Department'
const SELECT_BY_ID = 'SELECT * FROM Department WHERE id = ?'

export async function getDepartments(req: Request, res: Response) {
    try {
        const conn = await connect()
        const [rows] = await conn.query(SELECT_ALL)
        res.json(rows)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function getDepartment(req: Request, res: Response) {
    try {
        const conn = await connect()
        const [rows] = await conn.query(SELECT_BY_ID, [req.params.id])
        res.json(rows)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
