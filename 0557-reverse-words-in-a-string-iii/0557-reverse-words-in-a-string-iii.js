/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversedword= s.split("").reverse().join("");
    return reversedword.split(" ").reverse().join(" ");
};