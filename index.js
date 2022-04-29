const logEvents = require('./logEvents');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('log', () => {
    logEvents('Log Event Message');
  });

setTimeout(() => {
    eventEmitter.emit('log');  
}, 2000);

  