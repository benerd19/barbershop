const mysql = require('mysql2')

const connection = mysql
    .createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    })
    .promise()

module.exports = connection
