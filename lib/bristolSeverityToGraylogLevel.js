'use strict';

const BRISTOL_TO_GRAYLOG_LEVELS = {
  // 'emergency'
  // 'alert'
  // 'critical'
  error: 'error',
  warn:  'warning',
  // 'notice'
  info:  'info',
  debug: 'debug',
  trace: 'debug'
};


/**
 * Converts a Bristol default severity to a Graylog level.
 *
 * @param  {string} severity
 * The Bristol severity. Only works with defaults.
 *
 * @return {string}
 * The Graylog equivelant, or whatever is closest.
 * If not found, defaults to error.
 */
function bristolSeverityToGraylogLevel(severity) {
  return BRISTOL_TO_GRAYLOG_LEVELS[severity] || 'error';
}

module.exports = bristolSeverityToGraylogLevel;