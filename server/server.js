const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const router = require('./router')
const server = express();
const port = 8080;

server.use(
    bodyParser.urlencoded({
        extended: true
    })
);
server.use(bodyParser.json());
server.use(logger('dev'));
server.use(cors())
server.use(router)

server.listen(port, () => {
    console.log(`running on ${port}`);
});