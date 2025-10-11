/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     let sq =Math.sqrt(num);
    return sq % 1 === 0 ?true :false;
};