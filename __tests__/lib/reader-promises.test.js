'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    return reader(files)
      .catch(err => {
        expect(err).toEqual('requires exactly three files');
      });
  });


  it('reads 3 files', () => {
    let files = ['../files/1.txt', '../files/2.txt', '../files/3.txt'];
    return reader(files)
      .then(data => {
        expect(Array.isArray(data)).toBeTruthy();
        expect(data.length).toBe(3);
      });
  });

});
