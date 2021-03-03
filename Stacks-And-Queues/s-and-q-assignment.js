// 1. Create a stack class (singly list)
class _Stack {
  constructor(data, next) {
    this.top = null;
    this.data = data;
    this.next = next;
  }
  // forEach(isP => isP.value)
  push(data) {
    // if top is null, top becomes new stack
    // and it is returned
    if (this.top === null) {
      this.top = new _Stack(data, null)
      return this.top;
    }
    // if not, create new node, add data to it, and have the pointer point to the top
    const newNode = new _Stack(data, this.top)
    newNode = this.top;
  }
  pop() {
    // set node to top, point top to next, return node data
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  // 2. Useful methods for a stack
  // look at the top of the stack without removing it
  peek() {
    if (this.top = null) {
      this.top = new _Node(data, null);
      return this.top;
    }
  }
  // check if the stack is empty or not
  isEmpty() {
    if (this.top === null) {
      return { error: { message: 'Empty!' } }
    }
  }
  // display the stack - what is the 1st item in your stack?
  display(data, value) {
    let displayStack = new _Stack(data, value)
    console.log(displayStack)
  }
}

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

// Create Stack
// write methods
// use methods in stack to solve problem and generate desired output (will be jumping between abstract (creating methods in class) and (concrete writing stacks))
let roles = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
const starTrek = new _Stack(roles);
console.log(starTrek.peek(roles))
console.log(starTrek.display())
console.log(starTrek.pop('McCoy'))
console.log(roles)



const verifyPalindrome = (phrase)=> {
  const wordstack = new _Stack()
  // use stack to check whether palidrome
}

/*
3. Check for palindromes using a stack
Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
*/
function is_palindrome(s) {
  // eliminate everything that isn't a letter or number
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  // compare last letter with 1st letter...2nd to last with 2nd...pop
  const testStack = ['a', 'b', 'c'];
  let first = is_palindrome.pop(testStack[0])
  let last = is_palindrome.pop(testStack.length)
  if(last === first) {
    return console.log(`${testStack} is a palidrome!`)
  }
  return testStack;
}
// class _newStack {
//   constructor(data, next, head) {
//     this.top = null;
//     this.data = data;
//     this.next = next;
//     this.head = head;
//   }
//   //use forEach to iterate through each value (1st-Last, 2nd-2nd-Last...etc) return true console.log('${phrase} is a Palindrome') 
//   // forEach(isPal => isPal.value ) 
//   push(data) {
//     //add data to top to replace null value
//   }
//   pop() {
//     //remove 1st value and compare to last === palindrome?
//     //if first palindrome
//   }
//   // 
//   //how to integrate function startTrek() into this?
// }
// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
// https://stackoverflow.com/questions/59622129/check-if-linked-list-is-palindrome-in-javascript
/*

4. Matching parentheses in an expression 'balanced parantheses'

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