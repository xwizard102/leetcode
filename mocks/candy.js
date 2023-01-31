/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    var types = {};
    
    candyType.forEach(x => types[x] = x);
    
    var m = 0;
    for (const key in types) {
        m++;
    }

    return Math.min(m, candyType.length/2);
};

console.log(distributeCandies([1,1,2,2,3,3]));
console.log(distributeCandies([1,1,2,3]));
console.log(distributeCandies([6,6,6,6]));