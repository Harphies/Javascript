/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logs = require('./vars');
const routes = require('../api/routes/v1');

/**
 *  EXpress instance
 * @public
 */
const app = express();

// require logging. dev  console | production: file
app.use(morgan(logs));

// parse body params and attribute them to req.body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// secure the app by using various HTPP headers
app.use(helmet());

// enable cors - Cross origin sharing
app.use(cors());

// mount API routes
app.use('/v1', routes); 


module.exports = app;