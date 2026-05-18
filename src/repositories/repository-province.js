import DBConfig from './../configs/dbConfig.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql    = `SELECT * FROM provinces`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    
    getByIdAsync = async (idR) => {
        
        let returnResult = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql    = `SELECT * FROM provinces WHERE id = $1 `;
              const values = [idR];
            const result = await client.query(sql);
            await client.end();
            returnResult = result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return returnResult;

    }
    createAsync = async (entity) => {/* hacerlo */}
    updateAsync = async (entity) => {/* hacerlo */}
    deleteByIdAsync = async (id) => {/* hacerlo */}
}