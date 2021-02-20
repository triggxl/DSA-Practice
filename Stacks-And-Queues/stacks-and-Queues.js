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

// function foo() {

// }

// // const foo = () => {

// // }
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

// Assignment Questions:
// 1. Create a stack class (above)
// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
function starTrek() {
  let roles = ['Kirk', 'Spock', 'McCoy', 'Scotty']
  return this.first.push(roles)
}
starTrek()
// 2. Useful methods for a stack
// look at the top of the stack without removing it
function peek() {
  if (this.top = null) {
    this.top = new _Node(data, null);
    return this.top;
  }
}
// check if the stack is empty or not
function isEmpty() {
  if (this.top === null) {
    return { error: { message: 'Empty!' } }
  }
}
// display the stack - what is the 1st item in your stack?
function display() {
  let displayStack = new _Node(data, value)
  console.log(displayStack)
}
display(0)

/*
3. Check for palindromes using a stack
Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
*/
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
// https://stackoverflow.com/questions/59622129/check-if-linked-list-is-palindrome-in-javascript
/*
Review:
singly linked -->
<-- doubly linked -->
'next' variable
  pointer to the next node
constructor
  accepts the variables that hold the data
head
  indicates the beginning of a list

  singly --> stack
  doubly --> queue
*/
