/* eslint-disable quotes */
// make bluebird defalut promise
// eslint-disable-next-line no-global-assign
Promise = require("bluebird");
const { port, env } = require("./config/vars");
const logger = require("./config/logger");
const app = require("./config/express");

// listen to request
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 * @public
 */

module.exports = app;
