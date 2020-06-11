import { connect } from '../database'
import { Request, Response } from 'express'

const SELECT_ALL = 'SELECT * FROM State'
const SELECT_BY_ID = 'SELECT * FROM State WHERE id = ?'

export async function getStatus(req: Request, res: Response) {
    try {
        const conn = await connect()
        const [rows] = await conn.query(SELECT_ALL)
        res.json(rows)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function getStatu(req: Request, res: Response) {
    try {
        const conn = await connect()
        const [rows] = await conn.query(SELECT_BY_ID, [req.params.id])
        res.json(rows)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
