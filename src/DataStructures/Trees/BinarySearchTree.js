// Two Branches for ever node
/* Ordered, if it were numbers it would say left side is less than or equal to the root,
  and the right be more than the parent */
// Code comes from freeCodeCamp!  Comments provided for additional learning purposes

class Node {
  constructor(data, left = null, right = null) {
    this.data = data; // just number  or data in this case
    this.left = left; // pointer to the node on its left
    this.right = right; // pointer to the node on its right
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) { // if nothing at the top of the tree then it at the top of the tree
      this.root = new Node(data);
    } else {
      const searchTree = function (node) { // recursive function here
        if (data < node.data) { // checking if it supposed to go left
          if (node.left === null) { // something exist more to the left?
            node.left = new Node(data); // nothing exist to the left then add the new node and make it the pointer
          } else if (node.left !== null) { // make the decision from here if you need to go left or right again
            return searchTree(node.left);
          }
        } else if (data > node.data) { // checking if it going right
          if (node.right === null) { // something exist more to the right?
            node.right = new Node(data); // nothing exist to the right then add the new node and make it the pointer
          } else if (node.right !== null) {
            return searchTree(node.right); // make the decision from here if you need to go left or right again
          }
        } else {
          return null; // node already exist
        }
      };
      return searchTree(node);
    }
  }

  findMin() { // go all the way to the left
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() { // go all the way to the left
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) { // recursive again
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      node.right = removeNode(node.right, data);
      return node;
    };
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    const left = this.findMinHeight(node.left);
    const right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    }
    return right + 1;
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    const left = this.findMaxHeight(node.left);
    const right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    }
    return right + 1;
  }

  inOrder() {
    if (this.root == null) {
      return null;
    }
    const result = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }

  preOrder() {
    if (this.root == null) {
      return null;
    }
    const result = new Array();
    function traversePreOrder(node) {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }
    traversePreOrder(this.root);
    return result;
  }

  postOrder() {
    if (this.root == null) {
      return null;
    }
    const result = new Array();
    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    }
    traversePostOrder(this.root);
    return result;
  }

  levelOrder() {
    const result = [];
    const Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        const node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    }
    return null;
  }
}


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log(`inOrder: ${bst.inOrder()}`);
console.log(`preOrder: ${bst.preOrder()}`);
console.log(`postOrder: ${bst.postOrder()}`);

console.log(`levelOrder: ${bst.levelOrder()}`);
