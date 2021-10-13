const mod = require('.');
const { expect } = require('chai');

describe('my module', () => {
  it('should return 2', () => {
    expect(mod()).to.equal(2);
  });
});
