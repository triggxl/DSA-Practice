/*
Stacks and Queues
examples:
history of pages visited in a browser || undo operation in a text editor

Key Terms

Stack
  'vertical' data structure similar to a list where elements are stored in a LIFO order
  first/only directly accessible item on the stack ref: as 'top'
  implemented by a singly linked list where items can only be deleted at the end
  2 primary fx(s): push() and pop()
LIFO
  (Last In First Out) order
Queue
  a type of list where data is inserted at the end and is removed from the front
  ex: event loop of a web browser, (Out) <-- Rachael, Decker, K, Tyrell, Pris <--(In)
FIFO
  (First In First Out) order
Enqueue
  adds data to the queue
Dequeue
  removes oldest data from the queue
*/

// console.log(foo)

// function foo() {}

// // const foo = () => {}
// // unless you're using 'var' or the function keyword, variables can't be used until they are called

// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    // empty 1st node
    this.top = null;
    this.data = data;
    this.next = next;
  }
  // O(1) inserting (only referred to node at 'top' of stack)
  // if top 'null' ? set node to top and return it
  push(data) {
    if (this.top = null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    // if not, create new node, add data to it, and have the pointer point to the top
    const node = new _Node(data, this.top)
    this.top = node
  }
  // O(1) removal
  // point ptr to next item as 'top' of stack
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// Creates a node containing the data and a reference to the next item
class _Node {
  // why put 'value' as param..does that give it global scope?
  //could param be placed after named fx instead
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class _Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  // LIFO, Insertion
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    // make new node the last item
    this.last = node;
  }
  // FIFO, removal
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

// DSA topics be comfortable with:
// Make me an instance of this classes
// Add something to the front/back/nth item in list 
// Manipulate the structure in some thing
// Explain what the big is of it
// Recursion: basics like fibonnaci

// Writing by memory and code clarity & pseudocode
// JavaScript
// Write a to-do list to think through the problem and how to solve it
