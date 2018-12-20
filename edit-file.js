'use strict';

const fs = require('fs');

let fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {

  if (err) throw err;
  console.log('this is your note BEFORE ', data.toString());
  let randomNumb = Math.random();
  let newFile = data.toString() + randomNumb;

  fs.writeFile(fileName, newFile, (err) => {
    if (err) throw err;
    console.log('The file has been updated!');

    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      console.log('this is your note AFTER ', data.toString());
    });

  });

});


