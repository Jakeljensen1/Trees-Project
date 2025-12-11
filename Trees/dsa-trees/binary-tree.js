/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDHelper(node.rihgt) + 1;
      if (node.right === null) return minDHelper(node.left) + 1
      return (Math.min(minDHelper(node.left), minDHelper(node.right))
      ) // No need for a counter here, because the call stack itself carries the depth info. IOW, each recursive call represents going one level deeper
    }
    return minDHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDHelper(node.right) + 1;
      if (node.right === null) return maxDHelper(node.left) + 1;
      return (Math.max(maxDHelper(node.left)), Math.max(maxDHelper(node.right)))
    }
    return maxDHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    maxSumHelper(this.root)
    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let result = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassign = currentVal < result || result === null;

      if (higherThanLowerBound && shouldReassign) {
        result = currentVal;
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root && node2 === this.root) return false;

    function findLvlRent(currentNode, potentialCousin, level = 0, data = { level: 0, parent: null }) {
      if (data.parent) return data;
      if (currentNode.left === potentialCousin || currentNode.right === potentialCousin) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        findLvlRent(currentNode.left, potentialCousin, level + 1, data);
      }
      if (currentNode.right) {
        findLvlRent(currentNode.right, potentialCousin, level + 1, data);
      }
      return data;
    }
    let node1Info = findLvlRent(node1, this.root);
    let node2Info = findLvlRent(node2, this.root);

    let sameLevel =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }


  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const serialized = [];

    function traverse(node) {
      if (node) {
        serialized.push(node.val); // record the node's value
        traverse(node.left); // recurse left
        traverse(node.right); // recurse right
      } else {
        serialized.push("#"); //marker for null
      }
    }

    traverse(tree.root);
    return serialized.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (!stringTree) return null;

    const values = stringTree.split(" ")

    function buildTree() {
      if (values.length) {
        const currentVal = values.shift();

        if (currentVal === "#") return null;

        // remember to convert values back into numbers
        let currentNode = new BinaryTreeNode(+currentVal);// + currentVal ensures node values are number not strings
        currentNode.left = buildTree();
        currentNode.right = buildTree();

        return currentNode;
      }
    }
    const root = buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode = this.root) {
    // base case 1: empty tree
    if (currentNode === null) return null;

    // base case 2: root is one of the target nodes
    if (currentNode === node1 || currentNode === node2) return currentNode;

    // recursively search the left sub-tree
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);

    // recursively search the right sub-tree
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;

    // if one node is not null, return it
    if (left !== null || right !== null) return left || right;

    // left and right are both null, return null
    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
