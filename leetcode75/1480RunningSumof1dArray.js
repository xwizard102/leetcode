/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var sums = [];
    nums.reduce((p, x, i) => {
        p+=x;
        sums.push(p);
        return p;
    }, 0);

    return sums;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));