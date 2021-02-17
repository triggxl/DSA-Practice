const Memory = require('./memory');

class Array {
  // initializing length and allocating memory for it
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = new Memory()
    this.ptr.allocate(this.length);
  }
  //setting capacity to 3x memory based on length
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    this.ptr.set(this.ptr + this.length, value);
    this.length++;
  }
  //explain how 'size' arg is being used in this fx
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    console.log(this.ptr)
    this.ptr.copy(this.ptr, oldPtr, this.length);
    this.ptr.free(oldPtr);
    this._capacity = size;
  }
  //retreiving values
  //adds an index offset, and gets the value stored at a memory address- both of which are O(1) operations
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return this.ptr.get(this.ptr + index);
  }
  //removing values from the end of array; extra space will be filled at next push
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = this.ptr.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  //inserting values: shift all values after new, back to 1 position; then put new value in its correct place
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    this.ptr.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    this.ptr.set(this.ptr + index, value);
    this.length++;
  }
  // best: O(1) same as pushing
  //average: middle shift half of the values (n/2 copies) --> O(n)
  //worst: shift every value, that's n copies so it's O(n)
  // removing values: copying values backward to remove vs. forwards to create
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
  //best: O(1)
  //avg/worst: O(n)
}
//allocate more space to resize far less often (3x space) 
// Best case: O(1) operations
// Worst: remains O(n)
Array.SIZE_RATIO = 3;
//note that pushing to arrays is incredibly common then it's generally a worthwhile optimization to give you O(1) performance

// 2. Explore the push() method
// assign array to array class
let myArray = new Array()

// add test values
myArray.push('abc')
myArray.push('z')
myArray.push(5)
myArray.push(15)
myArray.push(19)
myArray.push(45)
myArray.push(10)

// grab values to assure array class is working 
console.log(myArray.get(0), myArray.get(1))
//length, capacity and memory address?
console.log(myArray.length, myArray._capacity, myArray.ptr)
// *What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
// I would explain the result as O(n) b/c runtime is proportional to the # of inputs?

// 3. Exploring the pop() method
myArray.pop()
myArray.pop()
myArray.pop()

console.log(myArray.length, myArray._capacity, myArray.ptr)

// 4. Understanding more about how arrays work
// Print the 1st item in the array arr.
console.log(myArray.head)
// Empty the array and add just 1 item: arr.push("tauhida");
// myArray.splice(0, myArray.length); (myArray.splice is not a function)
myArray = []; //assigning to empty array https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/
myArray.push("tauhida");
// Print this 1 item that you just added. What is the result? Can you explain your result?
console.log(myArray.push("tauhida")); //undefined
// What is the purpose of the _resize() function in your Array class?
// to allocate more memory and copy each item of data into a new box each time you resize your array

// 5. Write a method that takes in a string and replaces all its empty spaces with a %20
function urlIfyAString() {
  let urlify = myArray.split(' ', '%20'); //(value to replace, new value)?
  console.log(urlify)
}

urlIfyAString() //myArray.split is not a function

// 6. Filtering an array
function removeLessThan5(index) {
  let testArray = [2, 3, 4, 6, 7, 8];
  if (testArray.length < 5) {
    testArray.remove(index)
  }
  return testArray
}

removeLessThan5(myArray)
// trying to create a fx that removes all #'s < 5 using the 'remove' method created in our Array class
// then use that new fx on 'myArray'