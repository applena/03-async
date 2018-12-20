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
      else { resolve(data); }
    });
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths) => {
  return new Promise((resolve, reject)=>{
    if(paths.length !== 3){
      return reject('requires exactly three files');
    }
    
    readOne(paths[0]).then( data => {
      console.log('Read File 1');
      contents.push(data.toString().trim());
  
      readOne(paths[1]).then( data => {
        console.log('Read File 2');
        contents.push(data.toString().trim());
  
        readOne(paths[2]).then( data => {
          console.log('Read File 3');
          contents.push(data.toString().trim());
  
          resolve(contents);
        }).catch(console.error);
      }).catch(console.error);
    }).catch(console.error);
    
  });
  

};

