const BinarySearchTree = require('./binary-search-trees');

// 3
const BST = new BinarySearchTree();
// (`0 3,1,4,6,9,2,5,7`)
BST.insert(0, '3')
BST.insert(1, '1')
BST.insert(2, '4')
BST.insert(3, '6')
BST.insert(4, '9')
BST.insert(5, '2')
BST.insert(6, '5')
BST.insert(7, '7')

console.log(BST)

const BSTEQ = new BinarySearchTree();
// E A S Y Q U E S T I O N
BSTEQ.insert(0, 'E')
BSTEQ.insert(1, 'A')
BSTEQ.insert(2, 'S')
BSTEQ.insert(4, 'Q')
BSTEQ.insert(5, 'U')
BSTEQ.insert(6, 'E')
BSTEQ.insert(7, 'S')
BSTEQ.insert(8, 'T')
BSTEQ.insert(9, 'I')
BSTEQ.insert(10, 'O')
BSTEQ.insert(11, 'N')

console.log(BSTEQ)

/*
BinarySearchTree {
  key: 0,
  value: '3',
  parent: null,
  left: null,
  right: BinarySearchTree {
    key: 1,
    value: '1',
    parent: [Circular],
    left: null,
    right: BinarySearchTree {
      key: 2,
      value: '4',
      parent: [Circular],
      left: null,
      right: [BinarySearchTree]
    }
  }
}
BinarySearchTree {
  key: 0,
  value: 'E',
  parent: null,
  left: null,
  right: BinarySearchTree {
    key: 1,
    value: 'A',
    parent: [Circular],
    left: null,
    right: BinarySearchTree {
      key: 2,
      value: 'S',
      parent: [Circular],
      left: null,
      right: [BinarySearchTree]
    }
  }
}
 */
// 4
/*
Without running this code in your code editor, explain what the following program does. 
Show with an example the result of executing this program. 
What is the runtime of this algorithm?
 */
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

// return tree with the branches (nodes) that it has
// if tree = 3, 2, 1 for example it will return 3 as the root, with a left branch of 1 and a right branch of 2
tree(3)
//maybe not..(not sure how to use param 't' with BST Class 'value')
// time complexity: O(log(n))

// 5
/*
Write an algorithm to find the height of a binary search tree. 
What is the time complexity of your algorithm?
*/

let heightOfBST = new BinarySearchTree();

function heightOfBST() {
  let height = 0, nodeCount = 0, queue = [];
  if (nodeCount === 0) {
    return height;
  } else {
    height++;
  }
  while( nodeCount > 0) {
    // pop node from front
    // push its children to queue
    // decrease nodeCount
    height.remove(node.key);
    height.replace
    //add node from next level
  }
}
// https://www.geeksforgeeks.org/iterative-method-to-find-height-of-binary-tree/
// time complexity = O(n^2)

// 
/*
6. Is it a BST?
Write an algorithm to check whether an arbitrary binary tree is a binary search tree, 
assuming the tree does not contain duplicates.
 */
function isBST(key) {
  //initiate binary tree to test (let tree = []?)
  // start at root, check left or right key ? 'it's a binary search tree!' : 'not a BST'
  // if root contains left and right keys then it's a BST, or do we have to verify that each branch contains a l/r key?
}
// *Finish out BST questions then submit*