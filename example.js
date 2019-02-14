const bristol = require('bristol');
const graylog2 = require("graylog2");;
const bristolGraylog = require('./lib/bristol-graylog');

const target = bristolGraylog({ 
  client: new graylog2.graylog({
    servers: [ 
      { 'host': '127.0.0.1', port: 12201 }
    ],
    hostname: 'server.name', // the name of this host
                             // (optional, default: os.hostname())
    facility: 'Node.js',     // the facility for these log messages
                            // (optional, default: "Node.js")
    bufferSize: 1350         // max UDP packet size, should never exceed the
                            // MTU of your system (optional, default: 1400)
  })
})

// Add as a target with the included formatter.
bristol.addTarget(target)

// Try it out
bristol.debug('here come dat boi');
bristol.info('watch him rollin watch him go');
bristol.warn('he be rollin', { rollinWhere: 'down the street' });
bristol.error(new Error('o shit waddup'));

