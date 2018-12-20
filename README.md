![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name
03 - Async

### Author: Lena Eivy

### Links and Resources
* [repo](https://github.com/applena/03-async)
* [travis](https://travis-ci.com/applena/03-async.svg?branch=master)

### Modules
#### `reader-callbacks-array.js`
##### Exported Values and Methods
Exports a function that takes an array of filenames and a callback function. Callback is resolved with error or file content as an array.

- `reader(files, callback)`
  - `files` {array} - the list of file paths to read
  - `callback(err, data)` {function} - the callback function
    - `err` {string} - error message/reason
    - `data` {array} - string contents of each file

#### `reader-fixed.js`
##### Exported Values and Methods
Exports a function that takes an array of filenames and a callback function. Callback is resolved with error or file content as an array.

- `reader(files, callback)`
  - `files` {array} - the list of file paths to read
  - `callback(err, data)` {function} - the callback function
    - `err` {string} - error message/reason
    - `data` {array} - string contents of each file

### `reader-promise-all.js`
##### Exported Values and Methods
Exports a function that takes an array of filenames. Promise resolves with file content as an array or rejects with an error string.

- `reader(files)`
  - `files` {array} - the list of file paths to read

#### `reader-promises.js`
##### Exported Values and Methods
Exports a function that takes an array of filenames. Promise resolves with file content as an array or rejects with an error string.

- `reader(files)`
  - `files` {array} - the list of file paths to read


### Setup
`npm i`

#### Tests
* How do you run tests?
`npm run test`
* What assertions were made?
That the expected data types are put in with the correct number of parameters. That it performs the expected action.


##Contributors
Adam Eivy helped me with this lab
fs documentation
argv documentation
stack overflow
lots and lots of google