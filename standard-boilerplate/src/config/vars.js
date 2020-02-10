/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
}