/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    var left = [0];

    nums.reduce((p, x, i) => {
        p += x;
        left.push(p);
        return p;
    }, 0);

    for(let i=0; i<=nums.length; i++) {
        if (left[i] === (left[left.length-1]-left[i]-nums[i]))
            return i;
    }

    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));