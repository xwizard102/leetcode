/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    
    var res = 0;

    while(num) {
        res += (num&1? 2 : 1);
        num >>= 1;
    }

    return res? res-1 : res;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
console.log(numberOfSteps(0));