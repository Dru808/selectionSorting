/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const selectionSorting = require('../selectionSorting.js');

describe('selectionSorting', () => {
  it('should be a function', () => {
    expect(selectionSorting).to.be.a('function');
  });

  it('should sort the array in order of smallest to biggest', () => {
    expect(selectionSorting([6, 8, 5, 3, 1, 9])).to.deep.equal([1, 3, 5, 6, 8, 9]);
  });
});
