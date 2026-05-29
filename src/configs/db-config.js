import pg from 'pg';

const { Pool } = pg;

const config = {
    user: "postgres",
    host: "localhost",
    database: "TP_08",
    password: "root",
    port: 5432,
};

const pool = new Pool(config);

export default pool;