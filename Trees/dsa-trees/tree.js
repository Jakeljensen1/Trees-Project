/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0; // handle empty trees

    let total = 0;
    const toVisitStack = [this.root];

    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      console.log(current.val);
      total += current.val;
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    return total;
  }
  // Solution
  sumValues2() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let totalEvens = this.root.val % 2 === 0 ? 1 : 0;

    function evensHelper(node) { //loops through all children of given node
      for (let child of node.children) {
        if (child.val % 2 === 0) totalEvens++; // if even, count ++
        if (child.children.length > 0) { // recurse with child as the root
          evensHelper(child);
        }
      }
    }
    evensHelper(this.root);
    return totalEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function greaterHelper(node) {
      for (child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          greaterHelper(child);
        }
      }
    }
    greaterHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
