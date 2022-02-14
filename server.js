const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
// request a list of all potential candidates
// db.query('SELECT * FROM candidates', (err,rows) => {
//     console.log(rows);
// })

// db.query('SELECT * FROM candidates WHERE id=1', (err, row) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(row);
// });

// db.query('DELETE FROM candidates WHERE id= ?', 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// starts express.js server on port 3001
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});