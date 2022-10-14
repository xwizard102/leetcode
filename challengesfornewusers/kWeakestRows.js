function Node(ind, val) {
    this.ind = ind !== undefined? ind : null;
    this.val = val !== undefined? val : null;
}

function compare(a, b) {
    var v = a.val - b.val;
    return v? v : a.ind - b.ind;
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    var rows = [];

    for(let i=0; i<mat.length; i++) {
        cur = new Node(i, sumRow(mat[i]));
        rows.push(cur);
    }

    rows.sort(compare);

    var res = [];
    for(let j=0; j<k; j++) { res.push(rows[j].ind); }

    return res;
};

function sumRow(row) {
    var sum = 0;
    
    for (const x of row) {
        if (x > 0) sum++;
        else break;
    }

    return sum;
}

console.log(kWeakestRows([  [1,1,0,0,0],
                            [1,1,1,1,0],
                            [1,0,0,0,0],
                            [1,1,0,0,0],
                            [1,1,1,1,1]]
    , 3));
    
console.log(kWeakestRows([  [1,0,0,0],
                            [1,1,1,1],
                            [1,0,0,0],
                            [1,0,0,0]]
    , 2));