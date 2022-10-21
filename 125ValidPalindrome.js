/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = sanitizeText(s);

    var mid = Math.floor(s.length/2);

    for (let i=0; i<mid; i++) {
        if (s[i] !== s[s.length-1-i]) return false;
    }

    return true;
};

function sanitizeText(s) {

    var newS = "";

    for (let i=0; i<s.length; i++) {
        if (isAlphanumeric(s[i]))
            newS += s[i].toLowerCase();
    }

    return newS;
}

function isAlphanumeric(c) {
    return (c >= '0' && c <= '9')
        || (c >= 'a' && c <= 'z')
        || (c >= 'A' && c <= 'Z');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));