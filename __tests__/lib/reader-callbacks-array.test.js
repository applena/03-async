'use strict';

jest.mock('fs');
jest.setTimeout(10000);
const reader = require('../../lib/reader-callbacks-array.js');

describe('File Reader Callback Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    expect(()=>{reader(files);}).toThrow();
    done();
  });


  it('reads 5 files', done => {
    let files = ['../files/1.txt', '../files/2.txt', '../files/3.txt', '../files/4.txt', '../files/5.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(Array.isArray(data) ).toBeTruthy();
      expect(data.length ).toBe(5);
      done();
    });
  });

});
