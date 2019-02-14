'use strict';
const bristolSeverityToGraylogLevel = require('./bristolSeverityToGraylogLevel');

/**
 * Factory to make a Bristol target.
 * Installs it's own formatter.
 *
 * @param  {object} config
 * A configuration object.
 *
 * @return {Function}
 * A Bristol-compatible target function.
 */
module.exports = function makeGraylogTarget(config) {
  const client = config.client;

  /**
   * Function that actually does the logging.
   */
  function logToGraylog(opts, severity, date, elems) {
    const method = bristolSeverityToGraylogLevel(severity);
    
    const data = JSON.parse(elems)
    const message = data.message
    
    console.log('sending ', method, data.message, data.date, date)
    
    delete data.message
    delete data.date
    
    client[method](message, elems, data, date);
  }

  return logToGraylog;
}; 