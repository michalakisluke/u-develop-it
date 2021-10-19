const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not found)
// Must be immeditaley before app.listen
app.use((req, res) => {
    res.status(404).end();
});

// Must be last function
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});