'use strict';

const events = require('./events-module.js');

// events.on('create', payload => doLog('create', payload));
// events.on('delete', payload => doLog('delete', payload));
// events.on('update', payload => doLog('update', payload));

events.on((err => { throw err; }));
