/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    var pAnc = getAnc(root, p.val);
    var qAnc = getAnc(root, q.val);

    var res = null;

    for(var x, y; pAnc.length||qAnc.length;) {
        if (pAnc.length) x = pAnc.shift();
        if (qAnc.length) y = qAnc.shift();

        if (x === y) res = x;
    }

    return new TreeNode(res);
};

function getAnc(r, n) {
    var anc = [];
    var i = r;

    while(true) {
        anc.push(i.val);

        if (n > i.val) i = i.right;
        else if (n < i.val) i = i.left;
        else break;
    }

    return anc;
}

var ex = new TreeNode(6);

ex.left = new TreeNode(2);
ex.right = new TreeNode(8);

ex.left.left = new TreeNode(0);
ex.left.right = new TreeNode(4);
ex.right.left = new TreeNode(7);
ex.right.right = new TreeNode(9);

ex.left.right.left = new TreeNode(3);
ex.left.right.right = new TreeNode(5);

console.log(lowestCommonAncestor(ex, new TreeNode(2), new TreeNode(8)));  // 6
console.log(lowestCommonAncestor(ex, new TreeNode(2), new TreeNode(4)));  // 2



var ex = new TreeNode(2);
ex.left = new TreeNode(1);

console.log(lowestCommonAncestor(ex, ex, ex.left));  // 2



var ex = new TreeNode(6);

ex.left = new TreeNode(2);
ex.right = new TreeNode(8);

ex.left.left = new TreeNode(0);
ex.left.right = new TreeNode(4);
ex.right.left = new TreeNode(7);
ex.right.right = new TreeNode(9);

ex.left.right.left = new TreeNode(3);
ex.left.right.right = new TreeNode(5);


console.log(lowestCommonAncestor(ex, new TreeNode(3), new TreeNode(5)));  // 4