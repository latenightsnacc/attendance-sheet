var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

// Route for post new notes/minutes
app.post("/new", (req, res) => {
    try {
            const type = req.body.type;
            const date = req.body.date;
            const venue = req.body.venue;
            const topic = req.body.topic;
            const startTime = req.body.startTime;
            const endTime = req.body.endTime;
            const minutes = req.body.minutes;
            const note = res.json(req.body);
            console.log(note);
            // db.query('INSERT INTO notes (date, venue, topic, start_time, end_time, type, minutes) VALUES(?,?,?,?,?,?,?)', [date,venue,topic,startTime,endTime,type,minutes], (err, result) => {
            //     if(err){
            //         console.log(err)
            //     } else {
            //         res.send("Values Inserted");
            //         console.log(`${req.body.type} minutes created.`);
            //     }
            // })
    } catch (e) {
        console.log(e);
    }    
})
