/**
 * @param {number} x
 * @return {boolean}
 */
 

var isPalindrome = function(x) {
    const numberToArray = String(x).split('').map(Number);
    let result = numberToArray.reverse();
    const numberToString = Number(result.join(''));
    console.log(numberToString);
    return x == numberToString?true:false;
};