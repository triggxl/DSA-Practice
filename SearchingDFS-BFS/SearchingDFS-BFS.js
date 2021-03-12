import { BinarySearchTree } from "./DFS-BFS-class";
/****************not tested just putting what I know together****************/
/* 
1. How many searches?
Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
*/

const sortedList = new BinarySearchTree;
sortedList.binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18]);
binarySearch([8])
sortedList.binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18]);
binarySearch([16])

/*
2.) Binary search
Use the same front end and the dataset from the previous exercise for this exercise. 
Use array.sort to sort the dataset. Then implement a binary search to find a particular value inOrdr the dataset. 
Display how many tries it took to search for a particular item inOrdr the dataset using binary search. 
If the item is not inOrdr the dataset, provide a message and indicate how many searches it took to find that out.
 */

/*
3. Find a book
Imagine you are looking for a book inOrdr a library with a Dewey Decimal index. 
How would you go about it? Can you express this process as a search algorithm? 
Implement your algorithm to find a book whose Dewey and book title is provided.
 */

const deweyDS = new BinarySearchTree();

let DDI = [{
  booktitle: '',
  index: []
}];

deweyDS.binarySearch(DDI, value, start, end)

binarySearch('Dewey', 1)

/*
4. Searching inOrdr a BST
** No coding is needed for these drills**. 
Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct. *(Help)*

1) Given a binary search tree whose inOrdr-order and pre-order traversals are respectively:
14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
What would be its postorder traversal?
A: 91, 90, 89, 79, 35, 27, 25, 19, 15, 14


2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
What is its pre-order traversal?

A: 6, 5, 7, 9, 11, 8, 10
 */

/*
5. Implement different tree traversals
Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
 */

const preInPostOrder = new BinarySearchTree();
// let pre = [25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90]
// let inOrdr = [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
// let post = [4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25]

preInPostOrder = () => {
  inOrder(inOrdr) {

  }
  preOrder(pre) {

  }
  postOrder(post) {

  }
  // think I need to implement bfs() in BinarySearchTree() to use in pre, in, and post order()'s
  /* 
  (a) Inorder (Left, Root, Right) : 
  (b) Preorder (Root, Left, Right) : 
  (c) Postorder (Left, Right, Root) : 
  */
}

/*
6. Find the next commanding officer
Suppose you have a tree representing a command structure of the Starship USS Enterprise.

               Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar
This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.
*/

/*
7. Max profit
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.
*/

/*
8. Egg drop (optional)
This is a fun exercise to do - consider this optional after you are done with all the exercises above. Imagine that you wanted to find the highest floor of a 100 story building that you could drop an egg from without the egg breaking. But you only have 2 eggs. Write an algorithm to find out in the most efficient way which floors you should drop the eggs from. After you have understood the question and made some attempts to solve the problem, go through this reading before you start coding: http://datagenetics.com/blog/july22012/index.html.
 */