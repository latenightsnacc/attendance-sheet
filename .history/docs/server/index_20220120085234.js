const express = require('express');
const app = express();
const port = 30
app.get('/', (req, res) {
    res.send('./client/index.js')
})
