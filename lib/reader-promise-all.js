'use strict';

const fs = require('fs');
let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  return readAll([...files]);
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file) => {
  return new Promise ((resolve, reject) => {
    fs.readFile( file, (err, data) => {
      if(err) { reject(err); }
      else { resolve(data.toString().trim()); }
    });
  });
};

/**
 * Reads and returns the contents of array of files
 * @param paths
 */
const readAll = (paths) => {
  let promiseArr = [];

  for(let i = 0; i < paths.length; i++){
    console.log(`Read File ${i}`);
    promiseArr.push(readOne(paths[i]));
  }
    
  return Promise.all(promiseArr);
  

};

