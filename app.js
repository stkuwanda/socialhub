const express = require('express');

const compress = require('compression');

const cookieParser = require('cookie-parser');

const cors = require('cors');

const helmet = require('helmet');

const logger = require('morgan');


const app = express();


app.use(logger('short'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(compress());

app.use(helmet());

app.use(cors());


module.exports = app;