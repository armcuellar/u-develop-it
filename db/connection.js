const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '$trong2Remem',
        database: 'election'
    },
    console.log('connected to the election database.')
);

module.exports = db;