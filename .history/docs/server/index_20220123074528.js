const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require
const port = 3030;

const mysql = require('mysql');

const cors = require('cors');

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'e-attendance'
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const state = req.body.state;
    const statecode = req.body.statecode;
    const batch = req.body.batch;
    const lga = req.body.lga;
    const cds = req.body.cds;
    const ppa = req.body.ppa;
    const profilePic = req.body.profilePic;

    db.query('INSERT INTO corpers (name, email, phone, state, state_code, batch, lga, cds_group, ppa, profile_pic) VALUES(?,?,?,?,?,?,?,?,?,?)', [name,email,phone,state,statecode,batch,lga,cds,ppa,profilePic], (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send("Values Inserted");
            console.log('Profile created.');
        }
    })
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