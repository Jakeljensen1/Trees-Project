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
        findLvlRent(potentialCousin, currentNode.left, level + 1, data);
      }
      if (currentNode.right) {
        findLvlRent(potentialCousin, currentNode.right, level + 1, data);
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

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
