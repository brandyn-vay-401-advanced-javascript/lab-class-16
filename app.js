'use strict';

const fs = require('fs');

const events = require('./src/models/events-module.js');
require('./src/models/logger-module.js');

/**
 *
 *
 * @param {*} file
 */
const /**
 *
 *
 * @param {*} err
 * @param {*} data
 */
  alterFile = (file) => {
    fs.readFile( file, (err, data) => {
      if(err) {
        events.emit('error', err);
      }
      let text = data.toString().toUpperCase();
    
      fs.writeFile( file, Buffer.from(text), (err, data) => {
        if(err) { 
          events.emit('error', err);
        }
        events.emit('success', `The ${file} file has been saved!`);
      });
    });
  };

let file = process.argv.slice(2).shift();
alterFile(file);
