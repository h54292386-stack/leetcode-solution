/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = nums.reduce((sum,num)=>num + sum,0);
    let digitSum = 0;
    for(let num of nums){
        let digits = String(num).split('');
        for(let d of digits){
            digitSum += Number(d);
        };
    };
 return  elementSum - digitSum;
};

