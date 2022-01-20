const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.send('./client/src/index.js')
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})