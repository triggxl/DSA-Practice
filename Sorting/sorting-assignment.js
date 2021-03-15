const Sorting = require('./sorting-class');
const LinkedList = require('../Linked-List/linkedList') 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
/*
1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
What are the first 2 lists to be merged?
Which two lists would be merged on the 7th merge?
 */

// const msExample = new Sorting();
// let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)

// msExample.mergeSort(array) //1
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array) //7
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)
// msExample.mergeSort(array)

// ReferenceError: mergeSort is not defined

/*
2. Understanding quicksort
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been 17, but could not have been 14
-False
The pivot could have been either 14 or 17
-Correct, depending on which side you are starting the partition on
Neither 14 nor 17 could have been the pivot
-See previous response
The pivot could have been 14, but could not have been 17
-False
2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

When using the last item on the list as a pivot
When using the first item on the list as a pivot
 */
// const qsExample = new Sorting();
// let array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

// qsExample.quickSort(array, start = 12 , array.length)
// qsExample.quickSort(array, start = 14 , array.length)

// no output

/*
3. Implementing quicksort
Write a function qSort that sorts a dataset using the quicksort algorithm. 
The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.
 */

const qSort = new Sorting();
let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

qSort.quickSort(array);

// ReferenceError: partition is not defined

/*
4. Implementing merge sort
Write a function mSort that sorts the dataset above using the merge sort algorithm.
*/

const mSort = new Sorting();
mSort.mergeSort(array)

/*
5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. 
You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.
 */

const lnkdLst = new Sorting();
let tstLst = [];

lnkdLst.mergeSort(tstLst)

/*
6. Bucket sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.
*/

/*
7. Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
*/
/*

8. Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.
*/