const mod = require('.');
const { expect } = require('chai');

describe('my module', () => {
  it('should return 1', () => {
    expect(mod()).to.equal(1);
  });
});
