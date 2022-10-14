function Node(ind, val, next, prev) {
    this.ind = ind !== undefined? ind : null;
    this.val = val !== undefined? val : null;
    this.next = next !== undefined? next : null;

    this.compareTo = function(node) {
        if (node.val === this.val)
            return node.ind > this.ind? 1 : -1;

        return node.val > this.val? 1 : -1;
    }

    this.append = function(node) {
        node.next = this.next;
        this.next = node;
        return node;
    }

    this.insertHead = function(head) {
        head.next = this;
        return head;
    }

    this.insertInOrder = function(node) {
        var prev = cur = this;

        if (cur.compareTo(node) < 0) return this.insertHead(node);

        while(cur.compareTo(node) > 0 && cur.next) {
            prev = cur;
            cur = cur.next;
        }

        prev.append(node);
        return this;
    }
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    var head, cur;

    for(let i=0; i<mat.length; i++) {
        cur = new Node(i, sumRow(mat[i]));

        if (i===0) {
            head = cur;
            continue;
        }

        head = head.insertInOrder(cur);
    }

    var res = [head.ind];
    while (k>1) {
        head = head.next;
        res.push(head.ind);
        k--;
    }

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