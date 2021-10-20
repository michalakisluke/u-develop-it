const mysql = require('mysql2');

// Connect to database w/ verification
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: 'n2fCs4rvhp!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;