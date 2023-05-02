import mysql2 from 'mysql2/promise';
import keys from './keys';
// hilo de conexion
const pool = mysql2.createPool(keys.database);

console.log("db is connected  ", pool);
export default pool;
