const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const port = 3030;
const mysql = require('mysql');
const cors = require('cors');

// Use Express Static Folder
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database Connection
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'e-attendance'
});

//Checks database Connection
db.connect(function (err) {
    if(err) {
        return console.error(`Error: ${err.message}`);
    }
    console.log('Connected to Database Successfully.');
})

// Use of Multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public_html', 'images'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname )
    }
})

//@type POST
// Route for post data
app.post("/create", async (req, res) => {
    try {
        console.log(req.body);
        let upload = multer({ storage: storage}).single('profilePic');

        upload(req, res, function(err) {
            if (!req.file) {
                return res.send('Please select an image to upload');

            } else if (err instanceof multer.MulterError) {
                return res.send(err);
                
            } else if (err) {
                return res.send(err);
            }
            const name = req.body.name;
            const email = req.body.email;
            const phone = req.body.phone;
            const state = req.body.state;
            const statecode = req.body.statecode;
            const batch = req.body.batch;
            const lga = req.body.lga;
            const cds = req.body.cds;
            const ppa = req.body.ppa;
            const profilePic = req.file.filename;
        
            db.query('INSERT INTO corpers (name, email, phone, state, state_code, batch, lga, cds_group, ppa, profile_pic) VALUES(?,?,?,?,?,?,?,?,?,?)', [name,email,phone,state,statecode,batch,lga,cds,ppa,profilePic], (err, result) => {
                if(err){
                    console.log(err)
                } else {
                    res.send("Values Inserted");
                    console.log('Profile created.');
                }
            })
        })
    } catch (e) {
        console.log(e);
    }    
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

app.get('/corpers', (req,res) => {
    db.query("SELECT * FROM corpers", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})