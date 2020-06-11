import { connect, parseObject } from '../database'
import { Request, Response } from 'express'

const SELECT_ALL = 'SELECT C.id, description, M.name as municipality, D.name as department, latitude, longitude FROM Cases C JOIN State S ON C.state = S.id JOIN Municipality M ON C.municipality = M.id JOIN Department D ON M.department = D.id'
const SELECT_BY_ID = `${SELECT_ALL} WHERE C.id = ?`

export async function getCases(req: Request, res: Response) {
    try {
        const conn = await connect()
        const [rows] = await conn.query(SELECT_ALL)
        res.json(formatObject(rows))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function getCase(req: Request, res: Response) {
    try {
        const conn = await connect()
        const [rows] = await conn.query(SELECT_BY_ID, [req.params.id])
        res.json(formatObject(rows))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const formatObject = (object: any) => parseObject(object).map((row: object) => (
    {
        id: row['id'],
        municipality: row['municipality'],
        department: row['department'],
        statu: row['description'],
        coordinates: [row['longitude'], row['latitude']]
    }
))
