import DBConfig from './../configs/db-config.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql    = `SELECT * FROM province`;
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
            const sql    = `SELECT * FROM province WHERE id = $1 `;
              const values = [idR];
            const result = await client.query(sql, values);
            await client.end();
            returnResult = result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return returnResult;

    }
    createAsync = async (entity) => {
        let returnResult = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql    = `INSERT INTO province (id, name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
              const values = [entity.id, entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order];
            const result = await client.query(sql, values);
            await client.end();
            returnResult = result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return returnResult;}
    updateAsync = async (entity) => {
        let returnResult = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql    = `UPDATE province SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6 RETURNING *`;
              const values = [entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order, entity.id];
            const result = await client.query(sql, values);
            await client.end();
            returnResult = result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return returnResult;
        
    }
    deleteByIdAsync = async (idR) => { 
        let returnResult = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql    = `DELETE FROM province WHERE id = $1 RETURNING *`;
              const values = [idR];
            const result = await client.query(sql, values);
            await client.end();
            returnResult = result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return returnResult;}
}