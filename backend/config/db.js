import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '', // Verifique sua senha
    database: process.env.DB_NAME || 'produtos_api',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// Exportação DUPLA para evitar erros em outros arquivos
export default pool; // Permite: import db from './db.js'
export { pool };     // Permite: import { pool } from './db.js'