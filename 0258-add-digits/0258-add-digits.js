/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num <= 9)
    return num;

    let digits = num.toString().split('').map((digits)=>Number(digits)).reduce((digits,b)=>digits + b);
     
     if(digits >= 10){
        let c =digits.toString().split('').map((digits)=>Number(digits)). reduce ((digits,b)=>digits + b);
     
     
     
     if(c >= 10){
        let d= c.toString().split('').map((digits)=>Number(digits)). reduce ((digits,b)=>digits + b);
        return d;
     }

     return c;
     }

return digits;
};