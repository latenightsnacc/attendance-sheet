const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) {
    res.send('./client/index.js')
})

app.listen(port, () => {
    console.log
})