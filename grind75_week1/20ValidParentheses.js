/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // console.log(s);

    s = s.replaceAll("()", "").replaceAll("[]", "").replaceAll("{}", "");

    if (s.length === 0) return true;
    if (s.length === 1) return false;

    var c = openDict[s[0]];
    if (!c) return false;

    var cInd = s.lastIndexOf(c);
    if (cInd === -1) return false;
    if (cInd === s.length-1) return isValid(s.substring(1, s.length-1));
    
    return isValid(s.substring(1, cInd)) && isValid(s.substring(cInd+1));
};

var openDict = {
    "(": ")",
    "[": "]",
    "{": "}"
}

console.log(isValid("()"));                 // true
console.log(isValid("()[]{}"));             // true
console.log(isValid("(]"));                 // false
console.log(isValid("(([]){})"));           // true
console.log(isValid("([)]"));               // false
console.log(isValid("([{])"));              // false
console.log(isValid("([}])"));              // false
console.log(isValid("{}{}()[]"));           // true
console.log(isValid("{}[{}]((){})(){}"));   // true
console.log(isValid("[]()[()()][{}]()"));   // true