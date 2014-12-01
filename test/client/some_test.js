'use strict';
var expect = require('chai').expect;
var add = require('../../app/js/add');
var sub = require('../../app/js/sub');
var mul = require('../../app/js/mul');
describe('some test', function() {
  it('should add propertly', function() {
    expect(add(5, 7)).to.eql(12);
  });
  it('should subtract propertly', function() {
    expect(sub(5, 7)).to.eql(-2);
  });
  it('should multiply propertly', function() {
    expect(mul(5, 7)).to.eql(35);
  });
});
