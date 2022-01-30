var express = require('express')
const port = 
var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/new', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})
