/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   let sum = 0;
   let prd = 1;
   let digits = n.toString().split("");
   for(let digit of digits){
   let num = Number(digit);
    sum += num;
    prd *= num;
   }
   return prd - sum;
};