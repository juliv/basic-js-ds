
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.home = null
    this.size = 0
  }

  root() {
    return this.home
  }

  add(data) {
    const addNode = new Node(data)
    if (this.root() === null) {
      this.home = addNode
      this.size++
    }
    let current = this.root()
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = addNode
          this.size++
          break
        }
        else {
          current = current.left
        }
      }
      else if (data > current.data) {
        if (current.right === null) {
          current.right = addNode
          this.size++
          break
        }
        else {
          current = current.right
        }
      }
      else {
        break
      }
    }
  }

  has(data) {
    if (this.root() === null) {
      return false
    }
    let current = this.root()
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return false
      }
    }
    return true
  }

  find(data) {
    if (this.root() === null) {
      return null
    }
    let current = this.root()
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          return node.right
        }
        if (node.right === null) {
          return node.left;
        }
        let current = node.right;
        while (current.left !== null) {
          current = current.left
        }
        node.data = current.data
        node.right = removeNode(node.right, current.data)
        return node
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      }
      else {
        node.right = removeNode(node.right, data)
        return node;
      }
    }
    this.home = removeNode(this.root(), data)
  }

  min() {
    let current = this.root()
    if (current === null) {
      return null
    }
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.root()
    if (current === null) {
      return null
    }
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};