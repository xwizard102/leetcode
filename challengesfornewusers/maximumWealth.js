/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var max = 0;
    accounts
        .map(sumWealth)
        .forEach(x => max = x>max? x : max);

    return max;
};

function sumWealth(row) {
    return row.reduce((p, x, i) => p+x)
}

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));