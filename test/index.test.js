const MathClass = require('../index.js');
const assert = require('assert');

describe('MathClass', function() {
  describe('addTwoNumbers', function() {
    it('should return 2 when given 1 and 1', function() {
      const mathClass = new MathClass();
      assert.equal(mathClass.addTwoNumbers(1, 1), 2);
    });
  });

  describe('subtractTwoNumbers', function() {
    it('should return 0 when given 1 and 1', function() {
      const mathClass = new MathClass();
      assert.equal(mathClass.subtractTwoNumbers(1, 1), 0);
    });
  });

  describe('multiplyTwoNumbers', function() {
    it('should return 1 when given 1 and 1', function() {
      const mathClass = new MathClass();
      assert.equal(mathClass.multiplyTwoNumbers(1, 1), 1);
    });
  });

  describe('divideTwoNumbers', function() {
    it('should return 1 when given 1 and 1', function() {
      const mathClass = new MathClass();
      assert.equal(mathClass.divideTwoNumbers(1, 1), 1);
    });
  });
});