/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    var steps = 0;
    while (!isOne(s)) {
        s = isBinary(s)? divideByTwo(s) : addOne(s);
        steps++;
    }

    return steps;
};

function addOne(s) {

    var tail = s[s.length-1];
    var head = s.substring(0, s.length-1);
    if (!tail || tail === "0") return head + "1";

    return addOne(head) + "0";
}

function isBinary(s) {
    return s[s.length-1] === "0";
}

function divideByTwo(s) {
    return s.substring(0, s.length-1);
}

function isOne(s) {
    return s === "1";
}

console.log(numSteps("1101"));
console.log(numSteps("10"));
console.log(numSteps("1"));