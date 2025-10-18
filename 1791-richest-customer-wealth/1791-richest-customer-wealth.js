/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let richest = Math.max(...accounts.map(customer => 
  customer.reduce((sum, money) => sum + money, 0)
));
     return richest;
};