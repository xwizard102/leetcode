let dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

let subs = {
    IV: 1,
    IX: 1,
    XL: 10,
    XC: 10,
    CD: 100,
    CM: 100
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;

    for (let i=s.length-1; i>=0; i--) {
        res += dict[s[i]];

        if (i>0) {
            let sub = subs["" + s[i-1] + s[i]];
            if (sub) {
                res -= sub;
                i--;
            }
        }
        
    }

    return res;
};

console.time("ALL");

console.time("III");
console.log(romanToInt("III"));
console.timeEnd("III");

console.time("LVIII");
console.log(romanToInt("LVIII"));
console.timeEnd("LVIII");

console.time("MCMXCIVI");
console.log(romanToInt("MCMXCIV"));
console.timeEnd("MCMXCIVI");

console.timeEnd("ALL");
