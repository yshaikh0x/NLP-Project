const dotenv = require('dotenv');
dotenv.config();

//Define Global Variables
var path = require('path')
const cors = require('cors') //cors for cross origin allowance
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const apiKey = process.env.API_KEY;
//start up instance of app
const app = express()

/*Middleware*/
app.use(cors())
//Initialize main project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


console.log(`Your API key is ${process.env.API_KEY}`);

// alert("hello!!")

