/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    
    if (num === 0) return 0;
    
    return 1 + numberOfSteps(num%2? num-1 : num/2);
    
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));