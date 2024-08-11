const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig')


const app = express();

const serverSetup = async() => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.listen(process.env.PORT, async () => {
        console.log(`Server is Listening @ http://localhost:${PORT}`)
    })
};

serverSetup();