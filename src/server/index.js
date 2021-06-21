const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const cors = require('cors') //cors for cross origin allowance
const express = require('express')
const bodyParser = require("body-parser")
const fetch = require("node-fetch")
const mockAPIResponse = require('./mockAPI.js');
const { url } = require('inspector');
const { application } = require('express');
const apiKey = process.env.API_KEY;

//Start up instance of app
const app = express()

/*Middleware*/
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Initialize main project folder
app.use(express.static('dist'));
console.log(__dirname)

// designates what port the app will listen to for incoming requests
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}
//GET results route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
//GET test data
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
//POST route
console.log(`Your API key is ${process.env.API_KEY}`);
app.post('/postResults', async (req, res) => {
    const article = req.body.articleUrl;
    const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key="
    const key = process.env.API_KEY
    console.log('article =====+> ', article)
    const articleResults = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${article}&lang=en`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            res.send({
                subjectivity: data.subjectivity,
                agreement: data.agreement,
                confidence: data.confidence,
                irony: data.irony,
                scoreTag: data.scoreTag
            })
        });
})