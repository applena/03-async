'use strict';

//const fileReader = require('./lib/reader-fixed.js');
const fileReader = require('./lib/reader-callbacks-array.js');

// Obtain and assert input
//let files = process.argv[2];
var array = JSON.parse(process.argv[2]);

if( ! (Array.isArray(array) && array.length) ) {
  throw new Error('Invalid Args');
}

//files must be three files
fileReader(array, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
