/**
 * @param {number} x
 * @return {number}*/

var sumOfTheDigitsOfHarshadNumber = function(x) {
  let digitsum = 0;
  let digit = String(x).split('');
 for(let d of digit){
    digitsum += Number(d);
 };
 if(x % digitsum === 0){
    return digitsum;
 }else{
    return -1;
 };

}; 
