/**
 * @constructor
 */

function MathClass (){
  publicApi = {
    /**
    * @param {number} a
    * @param {number} b
    * @return {number}
    * @public
    * @method
    */
    addTwoNumbers: function(a, b){
      return a + b;
    },
    /**
     * 
     * @param {number} a
     * @param {number} b 
     * @returns {number}
     * @public
     * @method
     */
    subtractTwoNumbers: function(a, b){
      return a - b;
    },
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     * @public
     * @method
     */
    multiplyTwoNumbers: function(a, b){
      return a * b;
    },
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     * @public
     * @method
     */
    divideTwoNumbers: function(a, b){
      return a / b;
    },
    isZero: function(a){
      return a === 0;
    }
  }

  return publicApi;
}

module.exports = MathClass;