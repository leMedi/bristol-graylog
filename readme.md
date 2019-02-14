# [Graylog](https://www.graylog.org) transport for [Bristol](https://github.com/TomFrost/bristol)

Bristol transport to send events and errors to Graylog.

## Installation

You will need to install this package, as well as `[node-graylog2](https://www.npmjs.com/package/graylog2)`, which is the Graylog node.js client.

```
npm install --save bristol-graylog graylog2 bristol
```

## Getting started

```js
const bristol = require('bristol');
const graylog2 = require("graylog2");;
const bristolGraylog = require('bristol-graylog');

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
```
# Author

Mehdi El-Haij - [@leMedi](https://github.com/leMedi)