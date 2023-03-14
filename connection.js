const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool({
    connectionLimit: config.Limit,
    host: config.host,
    user: config.user,
    port: config.port,
    password: config.password,
    database: config.db,
    client: config.client

})

pool.getConnection((err) => {
    if (err) throw err;
    console.log(`database connected`);

})

module.exports = {pool};