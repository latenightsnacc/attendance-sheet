const express = require('express');
const app = express();
const port = 3030;
const mysql = require('mysql');

app.get('/', (req, res) => {
    res.send('../../index.js')
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})