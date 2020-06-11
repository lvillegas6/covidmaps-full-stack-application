import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool>{
    return createPool({
        host:'localhost', 
        user: process.env.API_USER_DB, 
        password: process.env.PASSWORD_DB,
        database: 'api_covidmaps_media',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}

export const parseObject = (object: any) => JSON.parse(JSON.stringify(object)) 
