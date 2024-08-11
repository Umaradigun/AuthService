const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig')


const app = express();
app.use(bodyParser.json());

const serverSetup = () => {

    app.listen(process.env.PORT,() => {
        console.log(`Server is Listening @ http://localhost:${PORT}`)
    })
}