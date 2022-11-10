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
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return root;
};

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