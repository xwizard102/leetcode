/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    var low = 0, high = nums.length-1;

    while (high - low > 1) {

        var mid = (low + high)>>1;

        // console.log(low, mid, high);

        if (target === nums[mid]) return mid;

        if (target > nums[mid]) low = mid + 1;
        else high = mid;
    }

    if (target === nums[low]) return low;
    if (target === nums[high]) return high;

    return -1;
};

var cr = "\n";
// var cr = "";

console.log(search([-1,0,3,5,9,12], 9), cr);    // 4
console.log(search([-1,0,3,5,9,12], 2), cr);    // -1
console.log(search([5], 5), cr);                // 0
console.log(search([2, 5], 5), cr);             // 1
console.log(search([-1, 0, 5], 0), cr);         // 1
console.log(search([-1, 0, 5], 5), cr);         // 2
console.log(search([-1, 0, 5], -1), cr);        // 0