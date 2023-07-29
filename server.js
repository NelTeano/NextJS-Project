require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;

const databaseURL = process.env.DB_URL;

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

mongoose.connect(databaseURL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('CONNECTED TO THE DATABASE'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static("public"));