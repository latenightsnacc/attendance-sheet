const express = require('express');
const app = express();

const port = 3030;

const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'pass@Root',
    database: 'e-attendanceDemo'
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const state = req.body.state;
    const statecode = req.body.statecode
})

app.get('/', (req, res) => {
    res.send('../../index.js')
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})