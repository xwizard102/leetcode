/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    var res = [];
    for (let i=1; i<=n; i++) {
        var x = (!(i%3)? "Fizz" : "") + (!(i%5)? "Buzz" : "");

        res.push(x.length>0? x : ""+i);
    }

    return res;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));