function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    var tempLeft = invertTree(root.left);
    var tempRight = invertTree(root.right);
    root.left = tempRight;
    root.right = tempLeft;
    return root;
};


var input = new TreeNode(4
    , new TreeNode(2, new TreeNode(1), new TreeNode(3))
    , new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );

console.log(invertTree(input));

var input = new TreeNode(2
    , new TreeNode(1)
    , new TreeNode(3)
    );

console.log(invertTree(input));

var input = new TreeNode();

console.log(invertTree(input));